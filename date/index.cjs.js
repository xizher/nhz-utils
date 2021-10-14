'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * 判断变量是否为 object 类型
 * @param val 变量
 */
/**
 * 判断变量是否为 null 或者 undefined
 * @param val 变量
 */
const isNullable = (val) => typeof val === 'undefined' || val === null;

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
/**
 * 等待
 * @param timestamp 时间戳
 */
function sleep(timestamp) {
    return new Promise(resolve => {
        setTimeout(() => resolve(), timestamp);
    });
}

exports.getMonth = getMonth;
exports.getNextDate = getNextDate;
exports.sleep = sleep;
exports.timestamp = timestamp;
