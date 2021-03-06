/**
 * 监听句柄
 */
export interface IObservableHandle {
  /**
   * 移除监听
   */
  remove () : void
}

/**
 * 监听回调函数参数
 */
export interface IObservableCallbackParams <NAME, THIS> {
  /**
   * 监听动作
   */
  name: NAME
  /**
   * 监听源
   */
  origin: THIS
}

/**
 * 监听回调函数
 */
export type IObservableCallback<T, NAME, THIS, RET =
void> = (e: T & IObservableCallbackParams<NAME, THIS>) => RET

/**
 * 主动监听类
 */
export class Observable <T> {

  /**
   * 监听事件池
   */
  private _eventMap : Map<keyof T, IObservableCallback<any, string, this>[]> // eslint-disable-line

  /**
   * 构造主动监听对象
   */
  constructor () {
    this._eventMap = new Map()
  }

  /**
   * 绑定监听函数
   * @param name 监听类型名
   * @param callback 监听回调函数
   */
  public on <K extends keyof T> (
    name: K,
    callback: IObservableCallback<T[K], K, this>
  ) : IObservableHandle {
    const key = (name as string).toLowerCase() as K
    let eventList = this._eventMap.get(key)
    if (!eventList) {
      this._eventMap.set(name, [])
      eventList = this._eventMap.get(key)
    }
    (eventList as unknown[]).push(callback)
    return {
      remove: () => this.off(name, callback)
    }
  }

  /**
   * 移除监听函数
   * @param name 监听类型名
   * @param callback 监听回调函数（不指定者移除所有）
   */
  public off <K extends keyof T> (
    name: K,
    callback?: IObservableCallback<T[K], K, this>
  ) : void {
    const key = (name as string).toLowerCase() as K
    const eventList = this._eventMap.get(key)
    if (!eventList || eventList.length === 0) {
      return
    }
    if (!callback) {
      eventList.splice(0, eventList.length)
      return
    }
    for (let i = 0; i < eventList.length; i++) {
      if (callback === eventList[i]) {
        eventList.splice(i--, 1) // i-- 预防遍历丢失情况
      }
    }
  }

  /**
   * 触发监听函数
   * @param name 监听函数名
   * @param data 数据
   */
  public fire <K extends keyof T> (
    name: K,
    data?: T[K]
  ) : this {
    const key = (name as string).toLowerCase() as K
    const eventList = this._eventMap.get(key)
    if (!eventList) {
      return this
    }
    const len = eventList.length
    if (len === 0) {
      return this
    }
    const params = Object.assign({
      name: key,
      origin: this
    }, data || {})
    for (let i = len - 1; i >= 0; i--) {
      const callback = eventList[i]
      const ret = callback(params)
      if (typeof ret === 'boolean' && !ret) {
        return this
      }
    }
    return this
  }

  /**
   * 绑定监听函数（仅监听一次）
   * @param name 监听类型名
   * @param callback 监听回调函数
   */
  public once <K extends keyof T> (
    name: K,
    callback: IObservableCallback<T[K], K, this>
  ) : void {
    const key = (name as string).toLowerCase() as K
    const nfn = (...args: unknown[]) => {
      this.off(key, nfn)
      callback.apply(this, args)
    }
    this.on(key, nfn)
  }

}

export default Observable

// /**
//  * 装饰器：属性监听
//  * @deprecated
//  */
// export function ObservableProperty (fireName: string) {
//   return function (target: Observable<any>, key: string) { // eslint-disable-line
//     let property = target[key]
//     const getter = () => property
//     const setter = (newVal: unknown) => {
//       target.fire(fireName, {
//         [key]: newVal,
//         [`old${key.replace(key[0], key[0].toUpperCase())}`]: property,
//       })
//       property = newVal
//     }

//     Object.defineProperty(target, key, {
//       get: getter,
//       set: setter,
//       enumerable: true,
//       configurable: true,
//     })
//   }
// }
