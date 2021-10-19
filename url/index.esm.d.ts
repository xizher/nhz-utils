/**
  * 加载css
  * @param cssUrl CSS路径
  */
declare function loadCss(cssUrl: string, success?: () => void, error?: (err: string | Event) => void): Promise<void>;
/**
  * 加载js
  * @param jsUrl JS路径
  * @param success 加载成功完成回调事件
  * @param error 加载错误回调事件
  */
declare function loadJs(jsUrl: string, success?: () => void, error?: (err: string | Event) => void): Promise<void>;
/**
 * 创建缓存地址
 * @param json JSON
 */
declare function createJSONUrl(json: object): [string, () => void];

export { createJSONUrl, loadCss, loadJs };
