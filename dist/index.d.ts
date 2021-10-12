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

/**
 * 监听句柄
 */
interface IObservableHandle {
    /**
     * 移除监听
     */
    remove(): void;
}
/**
 * 监听回调函数参数
 */
interface IObservableCallbackParams<NAME, THIS> {
    /**
     * 监听动作
     */
    name: NAME;
    /**
     * 监听源
     */
    origin: THIS;
}
/**
 * 监听回调函数
 */
declare type IObservableCallback<T, NAME, THIS, RET = void> = (e: T & IObservableCallbackParams<NAME, THIS>) => RET;
/**
 * 主动监听类
 */
declare class Observable<T> {
    /**
     * 监听事件池
     */
    private _eventMap;
    /**
     * 构造主动监听对象
     */
    constructor();
    /**
     * 绑定监听函数
     * @param name 监听类型名
     * @param callback 监听回调函数
     */
    on<K extends keyof T>(name: K, callback: IObservableCallback<T[K], K, this>): IObservableHandle;
    /**
     * 移除监听函数
     * @param name 监听类型名
     * @param callback 监听回调函数（不指定者移除所有）
     */
    off<K extends keyof T>(name: K, callback?: IObservableCallback<T[K], K, this>): void;
    /**
     * 触发监听函数
     * @param name 监听函数名
     * @param data 数据
     */
    fire<K extends keyof T>(name: K, data?: T[K]): this;
    /**
     * 绑定监听函数（仅监听一次）
     * @param name 监听类型名
     * @param callback 监听回调函数
     */
    once<K extends keyof T>(name: K, callback: IObservableCallback<T[K], K, this>): void;
}

export { IObservableCallback, IObservableCallbackParams, IObservableHandle, Observable, getMonth, getNextDate, isBoolean, isFunction, isNullable, isNumber, isObject, isPromise, isString, makeDestructurable, timestamp };
