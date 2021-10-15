'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * 首字母变小写
 * @param str 字符串
 */
function toLowerCaseFirstIndex(str) {
    return str.replace(str[0], str[0].toLowerCase());
}

exports.toLowerCaseFirstIndex = toLowerCaseFirstIndex;
