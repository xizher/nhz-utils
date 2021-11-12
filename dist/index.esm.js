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
/**
 * 等待
 * @param timestamp 时间戳
 */
function sleep(timestamp) {
    return new Promise(resolve => {
        setTimeout(() => resolve(), timestamp);
    });
}

/**
 * 主动监听类
 */
class Observable {
    /**
     * 监听事件池
     */
    _eventMap; // eslint-disable-line
    /**
     * 构造主动监听对象
     */
    constructor() {
        this._eventMap = new Map();
    }
    /**
     * 绑定监听函数
     * @param name 监听类型名
     * @param callback 监听回调函数
     */
    on(name, callback) {
        const key = name.toLowerCase();
        let eventList = this._eventMap.get(key);
        if (!eventList) {
            this._eventMap.set(name, []);
            eventList = this._eventMap.get(key);
        }
        eventList.push(callback);
        return {
            remove: () => this.off(name, callback)
        };
    }
    /**
     * 移除监听函数
     * @param name 监听类型名
     * @param callback 监听回调函数（不指定者移除所有）
     */
    off(name, callback) {
        const key = name.toLowerCase();
        const eventList = this._eventMap.get(key);
        if (!eventList || eventList.length === 0) {
            return;
        }
        if (!callback) {
            eventList.splice(0, eventList.length);
            return;
        }
        for (let i = 0; i < eventList.length; i++) {
            if (callback === eventList[i]) {
                eventList.splice(i--, 1); // i-- 预防遍历丢失情况
            }
        }
    }
    /**
     * 触发监听函数
     * @param name 监听函数名
     * @param data 数据
     */
    fire(name, data) {
        const key = name.toLowerCase();
        const eventList = this._eventMap.get(key);
        if (!eventList) {
            return this;
        }
        const len = eventList.length;
        if (len === 0) {
            return this;
        }
        const params = Object.assign({
            name: key,
            origin: this
        }, data || {});
        for (let i = len - 1; i >= 0; i--) {
            const callback = eventList[i];
            const ret = callback(params);
            if (typeof ret === 'boolean' && !ret) {
                return this;
            }
        }
        return this;
    }
    /**
     * 绑定监听函数（仅监听一次）
     * @param name 监听类型名
     * @param callback 监听回调函数
     */
    once(name, callback) {
        const key = name.toLowerCase();
        const nfn = (...args) => {
            this.off(key, nfn);
            callback.apply(this, args);
        };
        this.on(key, nfn);
    }
}
// /**
//  * 装饰器：属性监听
//  * @deprecated
//  */
// export function ObservableProperty (fireName: string) {
//   return function (target: Observable<any>, key: string) { // eslint-disable-line
//     let property = target[key]
//     const getter = () => property
//     const setter = (newVal: unknown) => {
//       target.fire(fireName, {
//         [key]: newVal,
//         [`old${key.replace(key[0], key[0].toUpperCase())}`]: property,
//       })
//       property = newVal
//     }
//     Object.defineProperty(target, key, {
//       get: getter,
//       set: setter,
//       enumerable: true,
//       configurable: true,
//     })
//   }
// }

/**
 * 创建唯一码
 * @param isGuid 是否Guid标准的唯一码，默认为false
 * @example
 * ```js
 * createUid() // -> xxxxxxxx
 * createUid(true) // -> xxxxxxxx-xxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
 * ```
 */
function createUid(isGuid) {
    const S4 = () => (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    return isGuid
        ? `${S4()}${S4()}-${S4()}-${S4()}-${S4()}-${S4()}${S4()}${S4()}`
        : `${S4()}${S4()}`;
}
/**
 * 创建指定范围的随机整数
 * @param min 最小
 * @param max 最大
 */
function createRandomInt(min = 0, max = 1) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return min + Math.round(Math.random() * (max - min));
}
/**
 * 创建随机布尔值
 */
function createRandomBool() {
    return Math.random() > .5;
}
/**
 * 随机获取数组的一个子集
 * @param arr 数组
 */
function getArrayItemRandom(arr) {
    const index = createRandomInt(0, arr.length - 1);
    return arr[index];
}

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
        return isObject(item) && !Array.isArray(item);
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
/**
 * 对象成员过滤
 * @param obj 对象
 * @param keys 保留的键
 */
function filterObjectIncludeKeys(obj, keys) {
    return Object.fromEntries(Object.entries(obj)
        .filter(([key]) => this.tableFields_.includes(key)));
}

class ArrayExtension {
    static _instance;
    _target;
    get $() {
        return this._target;
    }
    get last() {
        return this._target[this._target.length - 1];
    }
    constructor(target) {
        if (ArrayExtension._instance) {
            ArrayExtension._instance._target = target;
            return ArrayExtension._instance;
        }
        this._target = target;
        ArrayExtension._instance = this;
        return this;
    }
    insert(index, value) {
        this._target.splice(index, 0, value);
        return this;
    }
    removeIndex(index, returnRemoveItem) {
        const value = this._target[index];
        this._target.splice(index, 1);
        if (returnRemoveItem) {
            return value;
        }
        return this;
    }
    clear() {
        this._target.splice(0, this._target.length);
        return this;
    }
    reset(...items) {
        this._target.splice(0, this._target.length, ...items);
        return this;
    }
    removeValue(value, removeMany = false) {
        if (removeMany) {
            for (let i = 0; i < this._target.length; i++) {
                if (this._target[i] === value) {
                    this._target.splice(i--, 1);
                }
            }
        }
        else {
            for (let i = 0; i < this._target.length; i++) {
                if (this._target[i] === value) {
                    this._target.splice(i--, 1);
                    break;
                }
            }
        }
        return this;
    }
    unique() {
        this.reset(...new Set(this._target));
        return this;
    }
    getUnique() {
        return [...new Set(this._target)];
    }
    equal(anotherArr) {
        if (this._target.length !== anotherArr.length) {
            return false;
        }
        for (let i = 0; i < this._target.length; i++) {
            // eslint-disable-next-line
            // @ts-ignore
            if (this._target[i] !== anotherArr[i]) {
                return false;
            }
        }
        return true;
    }
    findItem(propName, propValue) {
        for (let i = 0; i < this._target.length; i++) {
            const item = this._target[i];
            if (item[propName] === propValue) {
                return item;
            }
        }
        return undefined;
    }
    findItems(propName, propValue) {
        const result = [];
        for (let i = 0; i < this._target.length; i++) {
            const item = this._target[i];
            if (item[propName] === propValue) {
                result.push(item);
            }
        }
        return result;
    }
    propToArr(prop) {
        return this._target.map(item => item[prop]);
    }
}
function arr(target) {
    return new ArrayExtension(target);
}
function toArray(target) {
    return Array.isArray(target) ? target : [target];
}

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

/**
 * like setInterval
 * @param args Parameters<typeof setInterval>
 * @returns function which can stop the interval handler
 */
function makeInterval(...args) {
    const id = setInterval(...args);
    return () => clearInterval(id);
}
/**
 * like setTimeout
 * @param args Parameters<typeof setTimeout>
 * @returns function which can stop the timeout handler
 */
function makeTimeout(...args) {
    const id = setTimeout(...args);
    return () => clearTimeout(id);
}
/**
 * like addEventListener
 * @param target 目标
 * @param type 监听类型
 * @param listener 监听器
 * @returns function which can stop the listerer
 */
function makeEventListener(target, type, listener) {
    target.addEventListener(type, listener);
    return () => target.removeEventListener(type, listener);
}
/**
 * like observable.on
 * @param target 目标
 * @param type 监听类型
 * @param listener 监听器
 */
function makeObservable(target, type, listener) {
    const { remove } = target.on(type, listener);
    return () => remove();
}

/**
 * 首字母变小写
 * @param str 字符串
 */
function toLowerCaseFirstIndex(str) {
    return str.replace(str[0], str[0].toLowerCase());
}

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
 * 创建缓存路径
 * @param blobPart Blob
 * @param options 配置项
 */
function createUrlFromBlob(blobPart, options) {
    const url = URL.createObjectURL(new Blob([blobPart], options));
    const destory = () => URL.revokeObjectURL(url);
    return makeDestructurable({ url, destory }, [url, destory]);
}
/**
 * 创建缓存地址
 * @param json JSON
 */
function createJSONUrl(json) {
    return createUrlFromBlob(JSON.stringify(json), { type: 'application/json' });
}

/**
 * 读取文件内容
 * @param file 文件
 * @param encoding 编码
 */
function readFileAsText(file, encoding) {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.onload = e => {
            const content = e.target?.result ?? '';
            resolve(String(content));
        };
        fileReader.onerror = err => {
            reject(err);
        };
        fileReader.readAsText(file, encoding);
    });
}
/**
 * 读取文件内容并转为JSON对象
 * @param file 文件
 * @param encoding 编码
 */
async function readFileAsJSON(file, encoding) {
    const content = await readFileAsText(file);
    return JSON.parse(content);
}

function warn(msg, ...args) {
    const warnArgs = [`[FSSGIS]: ${msg}`, ...args];
    console.warn(...warnArgs);
}

export { Observable, arr, createJSONUrl, createRandomBool, createRandomInt, createUid, createUrlFromBlob, debounce, deepCopy, deepCopyJSON, extend, filterObjectIncludeKeys, formatCash, formatChineseNumber, formatDate, getArrayItemRandom, getMonth, getNextDate, isBoolean, isFunction, isNullable, isNumber, isObject, isPromise, isString, loadCss, loadJs, makeDestructurable, makeEventListener, makeInterval, makeObservable, makeTimeout, readFileAsJSON, readFileAsText, sleep, throttle, timestamp, toArray, toLowerCaseFirstIndex, warn };
