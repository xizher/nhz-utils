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

export { createRandomBool, createRandomInt, createUid, getArrayItemRandom };
