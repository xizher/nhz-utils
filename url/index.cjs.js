'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
  * 加载css
  * @param cssUrl CSS路径
  */
function loadCss(cssUrl, success, error) {
    return new Promise((resolve, reject) => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = cssUrl;
        link.media = 'all';
        document.head.appendChild(link);
        link.onload = () => {
            success?.();
            resolve();
        };
        link.onerror = err => {
            error?.(err);
            reject(err);
        };
    });
}
/**
  * 加载js
  * @param jsUrl JS路径
  * @param success 加载成功完成回调事件
  * @param error 加载错误回调事件
  */
function loadJs(jsUrl, success, error) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = jsUrl;
        document.head.appendChild(script);
        script.onload = () => {
            success?.();
            resolve();
        };
        script.onerror = err => {
            error?.(err);
            reject(err);
        };
    });
}
/**
 * 创建缓存地址
 * @param json JSON
 */
function createJSONUrl(json) {
    const url = URL.createObjectURL(new Blob([JSON.stringify(json)], { type: 'application/json' }));
    return [url, () => URL.revokeObjectURL(url)];
}

exports.createJSONUrl = createJSONUrl;
exports.loadCss = loadCss;
exports.loadJs = loadJs;
