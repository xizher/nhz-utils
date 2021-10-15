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

export { deepCopy, deepCopyJSON, extend };
