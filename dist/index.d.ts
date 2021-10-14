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
 * 等待
 * @param timestamp 时间戳
 */
declare function sleep(timestamp: number): Promise<void>;

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

/**
 * 创建唯一码
 * @param isGuid 是否Guid标准的唯一码，默认为false
 * @example
 * ```js
 * createUid() // -> xxxxxxxx
 * createUid(true) // -> xxxxxxxx-xxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
 * ```
 */
declare function createUid(isGuid?: true): string;
/**
 * 创建指定范围的随机整数
 * @param min 最小
 * @param max 最大
 */
declare function createRandomInt(min?: number, max?: number): number;
/**
 * 创建随机布尔值
 */
declare function createRandomBool(): boolean;
/**
 * 随机获取数组的一个子集
 * @param arr 数组
 */
declare function getArrayItemRandom<T>(arr: T[]): T;

/**
 * 日期格式化
 * @param fmt 日期格式
 * @param date 日期
 */
declare function formatDate(fmt: string, date?: Date | number | string): string;
/**
 * 现金格式化
 * @param num 数值
 */
declare function formatCash(num: number | string): string;
/**
 * 转为中文数字
 * @param num 数值
 */
declare function formatChineseNumber(num: number | string): string;

/**
 * 对象扩展
 * @param target 目标
 * @param sources 源
 */
declare function extend<T extends object = object, S extends T = T>(target: T, ...sources: S[]): T;
/**
 * 深度复制（采用JSON解析方式）
 * @param obj 复制对象
 */
declare function deepCopyJSON<T>(obj: T): T;
/**
  * 深度复制（采用递归式）
  * @param obj 复制对象
  */
declare function deepCopy<T>(obj: T): T;

declare class ArrayExtension<T = any> {
    private static _instance;
    private _target;
    get $(): T[];
    get last(): T;
    constructor(target: T[]);
    insert(index: number, value: T): this;
    removeIndex(index: number): this;
    removeIndex(index: number, returnRemoveItem?: true): T;
    clear(): this;
    reset(...items: T[]): this;
    removeValue(value: T, removeMany?: boolean): this;
    unique(): this;
    getUnique(): T[];
    equal<K>(anotherArr: K[]): boolean;
    findItem(propName: keyof T, propValue: T[keyof T]): T | undefined;
    findItems(propName: keyof T, propValue: T[keyof T]): T[];
    propToArr(prop: keyof T): T[keyof T][];
}
declare function arr<T>(target: T[]): ArrayExtension<T>;

export { IObservableCallback, IObservableCallbackParams, IObservableHandle, Observable, arr, createRandomBool, createRandomInt, createUid, deepCopy, deepCopyJSON, extend, formatCash, formatChineseNumber, formatDate, getArrayItemRandom, getMonth, getNextDate, isBoolean, isFunction, isNullable, isNumber, isObject, isPromise, isString, makeDestructurable, sleep, timestamp };
