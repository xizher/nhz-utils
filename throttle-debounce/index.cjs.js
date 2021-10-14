'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
  * 防抖
  * （当持续触发事件时，
  * 一定时间段内没有再触发事件，
  * 事件处理函数才会执行一次，
  * 如果设定的时间到来之前，
  * 又一次触发了事件，
  * 就重新开始延时）
  * @param fn 函数
  * @param wait 延时毫秒数
  * @param immediate 是否立即执行
  */
/* istanbul ignore next */
function debounce(fn, wait, immediate = false) {
    let handle, ret = null;
    const debounced = function () {
        clearTimeout(handle);
        if (immediate === true) {
            if (!handle) {
                ret = fn(...arguments); // eslint-disable-line
            }
            handle = setTimeout(() => fn(...arguments), wait); // eslint-disable-line
        }
        else {
            handle = setTimeout(() => fn(...arguments), wait); // eslint-disable-line
        }
        return ret;
    };
    debounced.cancal = function () {
        clearTimeout(handle);
        handle = null;
    };
    return debounced; // eslint-disable-line @typescript-eslint/no-explicit-any
}
/**
  * 节流
  * （当持续触发事件时，
  * 保证一定时间段内只调用一次事件处理函数）
  * @param fn 函数
  * @param wait 间隔毫秒数
  * @param options 配置项
  */
/* istanbul ignore next */
function throttle(fn, wait, options = { leading: true, trailing: true }) {
    let handle, previous = 0;
    const throttled = function () {
        const now = Date.now();
        if (!previous && !options.leading) {
            previous = now;
        }
        const remaining = wait - (now - previous);
        if (remaining <= 0 || remaining > wait) {
            if (handle) {
                clearTimeout(handle);
                handle = null;
            }
            previous = now;
            fn(...arguments); // eslint-disable-line
        }
        else if (!handle && options.trailing) {
            handle = setTimeout(() => {
                previous = !options.leading ? 0 : Date.now();
                handle = null;
                fn(...arguments); // eslint-disable-line
            }, remaining);
        }
    };
    throttled.cancle = function () {
        clearTimeout(handle);
        previous = 0;
        handle = null;
    };
    return throttled; // eslint-disable-line @typescript-eslint/no-explicit-any
}

exports.debounce = debounce;
exports.throttle = throttle;
