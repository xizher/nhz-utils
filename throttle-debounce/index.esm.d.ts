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
declare function debounce<T extends Function>(fn: T, wait: number, immediate?: boolean): (T & {
    cancle(): void;
});
/**
  * 节流
  * （当持续触发事件时，
  * 保证一定时间段内只调用一次事件处理函数）
  * @param fn 函数
  * @param wait 间隔毫秒数
  * @param options 配置项
  */
declare function throttle<T extends Function>(fn: T, wait: number, options?: {
    leading?: boolean;
    trailing?: boolean;
}): (T & {
    cancle(): void;
});

export { debounce, throttle };
