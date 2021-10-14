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
 * 日期格式化
 * @param fmt 日期格式
 * @param date 日期
 */
function formatDate(fmt, date) {
    let _date;
    if (isNullable(date)) {
        _date = new Date();
    }
    else if (date instanceof Date) {
        _date = date;
    }
    else if (isNaN(date)) {
        _date = new Date(date);
    }
    else {
        _date = new Date(+date);
    }
    const o = {
        'M+': _date.getMonth() + 1,
        'd+': _date.getDate(),
        'h+': _date.getHours(),
        'm+': _date.getMinutes(),
        's+': _date.getSeconds(),
        'q+': Math.floor((_date.getMonth() + 3) / 3),
        'S': _date.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (_date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    for (const k in o) {
        if (new RegExp('(' + k + ')').test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1)
                ? (o[k])
                : (('00' + o[k]).substr(('' + o[k]).length)));
        }
    }
    return fmt;
}
/**
 * 现金格式化
 * @param num 数值
 */
function formatCash(num) {
    if (isNaN(num)) {
        return num;
    }
    return String(num).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
/**
 * 转为中文数字
 * @param num 数值
 */
function formatChineseNumber(num) {
    if (isNaN(num)) {
        return `${num}`;
    }
    const AA = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
    const BB = ['', '十', '百', '千', '万', '亿', '点', ''];
    const a = ('' + num).replace(/(^0*)/g, '').split('.');
    let k = 0, re = '';
    for (let i = a[0].length - 1; i >= 0; i--) {
        switch (k) {
            case 0:
                re = BB[7] + re;
                break;
            case 4:
                if (!new RegExp('0{4}\\d{' + (a[0].length - i - 1) + '}$').test(a[0])) {
                    re = BB[4] + re;
                }
                break;
            case 8:
                re = BB[5] + re;
                BB[7] = BB[5];
                k = 0;
                break;
        }
        if (k % 4 === 2 && a[0].charAt(i + 2) !== '0' && a[0].charAt(i + 1) === '0') {
            re = AA[0] + re;
        }
        if (a[0].charAt(i) !== '0') {
            re = AA[a[0].charAt(i)] + BB[k % 4] + re;
        }
        k++;
    }
    if (a.length > 1) { //加上小数部分(如果有小数部分)
        re += BB[6];
        for (let i = 0; i < a[1].length; i++) {
            re += AA[a[1].charAt(i)];
        }
    }
    return re;
}

exports.formatCash = formatCash;
exports.formatChineseNumber = formatChineseNumber;
exports.formatDate = formatDate;
