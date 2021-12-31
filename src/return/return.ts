import { Fn } from ".."

/**
 * Destructuring with object or array
 * @param obj Destructuring with object
 * @param arr Destructuring with array
 * @link https://antfu.me/posts/destructuring-with-object-or-array
 */
export function makeDestructurable <
  T extends Record<string, unknown>,
  A extends readonly unknown[]
  > (obj: T, arr: A): T & A {

  const clone = { ...obj }

  Object.defineProperty(clone, Symbol.iterator, {
    enumerable: false,
    value () {
      let index = 0
      return {
        next: () => ({
          value: arr[index++],
          done: index > arr.length,
        })
      }
    }
  })

  return clone as T & A
}

/**
 * 当函数返回指定结果时触发
 * @param intervalTime 间隔时间
 * @param fn 函数
 * @param target 函数返回结果验证
 */
export function whenReture<T> (intervalTime: number, fn: Fn<T>, target: Function = (ret: any) => ret) : Promise<NonNullable<T>> {
  return new Promise(resolve => {
    const handleId = setInterval(() => {
      const ret = fn()
      if (target(ret)) {
        clearInterval(handleId)
        resolve(ret as NonNullable<T>)
      }
    }, intervalTime)
  })
}
