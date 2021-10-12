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
 * ```ts
 * toString.call(val) === '[object Promise]'
 * !!val && (typeof val === 'object' || typeof val === 'function') && typeof val.then === 'function'
 * val instanceof Promise // <-
 * ```
 */
declare const isPromise: (val: unknown) => val is Promise<unknown>;

/**
 * Destructuring with object or array
 * @param obj Destructuring with object
 * @param arr Destructuring with array
 * @link https://antfu.me/posts/destructuring-with-object-or-array
 */
declare function makeDestructurable<T extends Record<string, unknown>, A extends readonly unknown[]>(obj: T, arr: A): T & A;

/**
 * 获取当前时间戳
 */
declare function timestamp(): number;
/**
 * 获取当前月份
 * @param date 日期，默认当前日期
 */
declare function getMonth(date?: Date | number | string): number;
/**
 * 获取递进日期
 * @param nDays 天数，默认为1天
 * @param date 日期，默认为当前日期
 */
declare function getNextDate(nDays?: number, date?: Date): Date;

export { getMonth, getNextDate, isBoolean, isFunction, isNullable, isNumber, isObject, isPromise, isString, makeDestructurable, timestamp };
