/**
 * 数组扩展装饰器（单例）
 */
export class ArrayExtension<T = any> { // eslint-disable-line
  /**
   * 唯一实例
   */
  private static _instance : ArrayExtension

  /**
   * 目标数组
   */
  private _target: T[]

  /**
   * 目标数组
   */
  public get $ () : T[] {
    return this._target
  }

  /**
   * 数组的最后一位
   */
  public get last () : T {
    return this._target[this._target.length - 1]
  }

  /**
   * 构造数组扩展装饰器
   * @param target 目标数组
   */
  constructor (target: T[]) {
    if (ArrayExtension._instance) {
      ArrayExtension._instance._target = target
      return ArrayExtension._instance
    }
    this._target = target
    ArrayExtension._instance = this
    return this
  }

  /**
   * 插入
   * @param index 位置索引
   * @param value 值
   */
  public insert (index: number, value: T) : this {
    this._target.splice(index, 0, value)
    return this
  }

  /**
   * 移除
   * @param index 位置索引
   */
  public removeIndex (index: number) : this
  /**
   * 移除
   * @param index 位置索引
   * @param returnRemoveItem 是否范围移除值
   */
  public removeIndex (index: number, returnRemoveItem?: true) : T
  /**
   * 移除
   * @param index 位置索引
   * @param returnRemoveItem 是否范围移除值
   */
  public removeIndex (index: number, returnRemoveItem?: boolean) : this | T {
    const value = this._target[index]
    this._target.splice(index, 1)
    if (returnRemoveItem) {
      return value
    }
    return this
  }

  /**
   * 清空数组
   */
  public clear () : this {
    this._target.splice(0, this._target.length)
    return this
  }

  /**
   * 重置数组
   * @param items 值
   */
  public reset (...items: T[]): this {
    this._target.splice(0, this._target.length, ...items)
    return this
  }

  /**
   * 移除值
   * @param value 值
   * @param removeMany 是否移除多个
   */
  public removeValue (value: T, removeMany = false) : this {
    if (removeMany) {
      for (let i = 0; i < this._target.length; i++) {
        if (this._target[i] === value) {
          this._target.splice(i--, 1)
        }
      }
    } else {
      for (let i = 0; i < this._target.length; i++) {
        if (this._target[i] === value) {
          this._target.splice(i--, 1)
          break
        }
      }
    }
    return this
  }

  /**
   * 唯一值处理
   */
  public unique () : this {
    this.reset(...new Set(this._target as T[]))
    return this
  }

  /**
   * 获取唯一值
   */
  public getUnique () : T[] {
    return [...new Set(this._target)]
  }

  /**
   * 数组对比
   * @param anotherArr 数组
   */
  public equal<K> (anotherArr: K[]) : boolean {
    if (this._target.length !== anotherArr.length) {
      return false
    }
    for (let i = 0; i < this._target.length; i++) {
      // eslint-disable-next-line
      // @ts-ignore
      if (this._target[i] !== anotherArr[i]) {
        return false
      }
    }
    return true
  }

  /**
   * 对象数组寻找值（首个）
   * @param propName 属性名
   * @param propValue 属性值
   */
  public findItem (propName: keyof T, propValue: T[keyof T]) : T | undefined {
    for (let i = 0; i < this._target.length; i++) {
      const item = this._target[i]
      if (item[propName] === propValue) {
        return item
      }
    }
    return undefined
  }

  /**
   * 对象数组寻找值（所有）
   * @param propName 属性名
   * @param propValue 属性值
   */
  public findItems (propName: keyof T, propValue: T[keyof T]) : T[] {
    const result : T[] = []
    for (let i = 0; i < this._target.length; i++) {
      const item = this._target[i]
      if (item[propName] === propValue) {
        result.push(item)
      }
    }
    return result
  }

  /**
   * 对象数组属性值提取
   * @param prop 属性名
   */
  public propToArr (prop: keyof T) : T[keyof T][] {
    return this._target.map(item => item[prop])
  }

}

/**
 * 构造数组装饰器
 * @param target 目标数组
 */
export function arr<T> (target: T[]) : ArrayExtension<T> {
  return new ArrayExtension(target)
}

/**
 * 转数组
 * @param target 目标
 */
export function toArray<T> (target: T | T[]) : T[] {
  return Array.isArray(target) ? target : [target]
}

export default arr
