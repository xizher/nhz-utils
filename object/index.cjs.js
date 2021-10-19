'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var is = require('../is');

/**
 * 对象扩展
 * @param target 目标
 * @param sources 源
 */
function extend(target, ...sources) {
    if (!sources.length) {
        return target;
    }
    const source = sources.shift();
    if (source === undefined) {
        return target;
    }
    if (isMergableObject(target) && isMergableObject(source)) {
        Object.keys(source).forEach((key) => {
            if (isMergableObject(source[key])) {
                if (!target[key]) {
                    target[key] = {};
                }
                extend(target[key], source[key]);
            }
            else {
                target[key] = source[key];
            }
        });
    }
    return extend(target, ...sources);
    function isMergableObject(item) {
        return is.isObject(item) && !Array.isArray(item);
    }
}
/**
 * 深度复制（采用JSON解析方式）
 * @param obj 复制对象
 */
function deepCopyJSON(obj) {
    return JSON.parse(JSON.stringify(obj));
}
/**
  * 深度复制（采用递归式）
  * @param obj 复制对象
  */
function deepCopy(obj) {
    const newObj = (Array.isArray(obj) ? [] : {});
    for (const key in obj) {
        // if (Object.prototype.hasOwnProperty.call(obj, key)) {
        newObj[key] = typeof obj[key] === 'object' && obj[key] !== null
            ? deepCopy(obj[key])
            : obj[key];
        // }
    }
    return newObj;
}

exports.deepCopy = deepCopy;
exports.deepCopyJSON = deepCopyJSON;
exports.extend = extend;
