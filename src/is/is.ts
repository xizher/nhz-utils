/**
 * 判断变量是否为 object 类型
 * @param val 变量
 */
export const isObject = (val: unknown): val is object => toString.call(val) === '[object Object]'

/**
 * 判断变量是否为 boolean 类型
 * @param val 变量
 */
export const isBoolean = (val: unknown): val is boolean => typeof val === 'boolean'


/**
 * 判断变量是否为 function 类型
 * @param val 变量
 */
export const isFunction = <T extends Function> (val: unknown): val is T => typeof val === 'function'

/**
 * 判断变量是否为 number 类型
 * @param val 变量
 */
export const isNumber = (val: unknown): val is number => typeof val === 'number' || toString.call(val) === '[object Number]'

/**
 * 判断变量是否为 string 类型
 * @param val 变量
 */
export const isString = (val: unknown): val is string => typeof val === 'string' || toString.call(val) === '[object String]'

/**
 * 判断变量是否为 null 或者 undefined
 * @param val 变量
 */
export const isNullable = (val: unknown): val is undefined | null => typeof val === 'undefined' || val === null

/**
 * 判断变量是否为 Promise 类型
 * @param val 变量
 * @example
 * ```ts
 * toString.call(val) === '[object Promise]'
 * !!val && (typeof val === 'object' || typeof val === 'function') && typeof val.then === 'function'
 * val instanceof Promise // <-
 * ```
 */
// eslint-disable-next-line
// @ts-ignore
export const isPromise = (val: unknown) : val is Promise<unknown> => val instanceof Promise

export const isConstructor = (val: unknown) : boolean => {
  try {
    // @ts-ignore
    new val();
  } catch (err) {
    if (err.message.indexOf('is not a constructor') >= 0) {
      return false;
    } else {
      throw err
    }
  }
  return true;
}
