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

declare type Stop = () => void;
/**
 * like setInterval
 * @param args Parameters<typeof setInterval>
 * @returns function which can stop the interval handler
 */
declare function makeInterval(...args: Parameters<typeof setInterval>): Stop;
/**
 * like setTimeout
 * @param args Parameters<typeof setTimeout>
 * @returns function which can stop the timeout handler
 */
declare function makeTimeout(...args: Parameters<typeof setTimeout>): Stop;
/**
 * like addEventListener
 * @param target 目标
 * @param type 监听类型
 * @param listener 监听器
 * @returns function which can stop the listerer
 */
declare function makeEventListener(target: Element | Document, type: string, listener: EventListenerOrEventListenerObject): Stop;
/**
 * like observable.on
 * @param target 目标
 * @param type 监听类型
 * @param listener 监听器
 */
declare function makeObservable<T, K extends keyof T>(target: Observable<T>, type: K, listener: IObservableCallback<T[K], K, any>): Stop;

export { makeEventListener, makeInterval, makeObservable, makeTimeout };
