'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

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

/**
 * Destructuring with object or array
 * @param obj Destructuring with object
 * @param arr Destructuring with array
 * @link https://antfu.me/posts/destructuring-with-object-or-array
 */
function makeDestructurable(obj, arr) {
    const clone = { ...obj };
    Object.defineProperty(clone, Symbol.iterator, {
        enumerable: false,
        value() {
            let index = 0;
            return {
                next: () => ({
                    value: arr[index++],
                    done: index > arr.length,
                })
            };
        }
    });
    return clone;
}

/**
 * 获取当前时间戳
 */
function timestamp() {
    return Date.now();
}
/**
 * 获取当前月份
 * @param date 日期，默认当前日期
 */
function getMonth(date) {
    if (isNullable(date)) {
        return new Date().getMonth() + 1;
    }
    if (date instanceof Date) {
        return date.getMonth() + 1;
    }
    if (isNaN(date)) {
        return new Date(date).getMonth() + 1;
    }
    else {
        return new Date(+date).getMonth() + 1;
    }
}
/**
 * 获取递进日期
 * @param nDays 天数，默认为1天
 * @param date 日期，默认为当前日期
 */
function getNextDate(nDays = 1, date = new Date()) {
    return new Date(date.getTime() + 24 * 60 * 60 * 1000 * Number(+nDays));
}

exports.getMonth = getMonth;
exports.getNextDate = getNextDate;
exports.isBoolean = isBoolean;
exports.isFunction = isFunction;
exports.isNullable = isNullable;
exports.isNumber = isNumber;
exports.isObject = isObject;
exports.isPromise = isPromise;
exports.isString = isString;
exports.makeDestructurable = makeDestructurable;
exports.timestamp = timestamp;
