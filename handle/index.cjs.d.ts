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

export { makeEventListener, makeInterval, makeTimeout };
