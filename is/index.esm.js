/**
 * 判断变量是否为 object 类型
 * @param val 变量
 */
const isObject = (val) => toString.call(val) === '[object Object]';
/**
 * 判断变量是否为 boolean 类型
 * @param val 变量
 */
const isBoolean = (val) => typeof val === 'boolean';
/**
 * 判断变量是否为 function 类型
 * @param val 变量
 */
const isFunction = (val) => typeof val === 'function';
/**
 * 判断变量是否为 number 类型
 * @param val 变量
 */
const isNumber = (val) => typeof val === 'number' || toString.call(val) === '[object Number]';
/**
 * 判断变量是否为 string 类型
 * @param val 变量
 */
const isString = (val) => typeof val === 'string' || toString.call(val) === '[object String]';
/**
 * 判断变量是否为 null 或者 undefined
 * @param val 变量
 */
const isNullable = (val) => typeof val === 'undefined' || val === null;
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
const isPromise = (val) => val instanceof Promise;

export { isBoolean, isFunction, isNullable, isNumber, isObject, isPromise, isString };
