import { sleep } from '../date'
import { Observable, IObservableCallback } from '../watch'

type Stop = () => void

/**
 * like setInterval
 * @param args Parameters<typeof setInterval>
 * @returns function which can stop the interval handler
 */
export function makeInterval (...args: Parameters<typeof setInterval>) : Stop {
  const id = setInterval(...args)
  return () => clearInterval(id)
}

/**
 * like setTimeout
 * @param args Parameters<typeof setTimeout>
 * @returns function which can stop the timeout handler
 */
export function makeTimeout (...args: Parameters<typeof setTimeout>) : Stop {
  const id = setTimeout(...args)
  return () => clearTimeout(id)
}

/**
 * like addEventListener
 * @param target 目标
 * @param type 监听类型
 * @param listener 监听器
 * @returns function which can stop the listerer
 */
export function makeEventListener (target: Element | Document | Window, type: string, listener: EventListenerOrEventListenerObject) : Stop {
  target.addEventListener(type, listener)
  return () => target.removeEventListener(type, listener)
}

/**
 * like observable.on
 * @param target 目标
 * @param type 监听类型
 * @param listener 监听器
 */
export function makeObservable<T, K extends keyof T> (target: Observable<T>, type: K, listener: IObservableCallback<T[K], K, any>) : Stop { // eslint-disable-line
  const { remove } = target.on(type, listener)
  return () => remove()
}

/**
 * like setInterval
 * @param handler 异步函数
 * @param interval 间隔时间戳
 */
export function makePromiseInterval (handler: (...args: any[]) => Promise<any>, interval = 0) { // eslint-disable-line
  let destory = false
  ;(async () => {
    while (!destory) {
      await handler()
      await sleep(interval)
    }
  })()
  return () => destory = true
}
