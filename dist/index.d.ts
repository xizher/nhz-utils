/**
 * 判断变量是否为 object 类型
 * @param val 变量
 */
declare const isObject: (val: unknown) => val is object;
/**
 * 判断变量是否为 boolean 类型
 * @param val 变量
 */
declare const isBoolean: (val: unknown) => val is boolean;
/**
 * 判断变量是否为 function 类型
 * @param val 变量
 */
declare const isFunction: <T extends Function>(val: unknown) => val is T;
/**
 * 判断变量是否为 number 类型
 * @param val 变量
 */
declare const isNumber: (val: unknown) => val is number;
/**
 * 判断变量是否为 string 类型
 * @param val 变量
 */
declare const isString: (val: unknown) => val is string;
/**
 * 判断变量是否为 null 或者 undefined
 * @param val 变量
 */
declare const isNullable: (val: unknown) => val is null | undefined;
/**
 * 判断变量是否为 Promise 类型
 * @param val 变量
 * @example
 * toString.call(val) === '[object Promise]'
 * !!val && (typeof val === 'object' || typeof val === 'function') && typeof val.then === 'function'
 * val instanceof Promise // <-
 */
declare const isPromise: (val: unknown) => val is Promise<unknown>;

declare function makeDestructurable<T extends Record<string, unknown>, A extends readonly unknown[]>(obj: T, arr: A): T & A;

export { isBoolean, isFunction, isNullable, isNumber, isObject, isPromise, isString, makeDestructurable };
