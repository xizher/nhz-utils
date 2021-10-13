/**
 * 创建唯一码
 * @param isGuid 是否Guid标准的唯一码，默认为false
 * @example
 * ```js
 * createUid() // -> xxxxxxxx
 * createUid(true) // -> xxxxxxxx-xxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
 * ```
 */
export function createUid (isGuid?: true) : string {
  const S4 = () => (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
  return isGuid
    ? `${S4()}${S4()}-${S4()}-${S4()}-${S4()}-${S4()}${S4()}${S4()}`
    : `${S4()}${S4()}`
}

/**
 * 创建指定范围的随机整数
 * @param min 最小
 * @param max 最大
 */
export function createRandomInt (min = 0, max = 1) : number {
  min = Math.ceil(min)
  max = Math.floor(max)
  return min + Math.round(Math.random() * (max - min))
}

/**
 * 创建随机布尔值
 */
export function createRandomBool () : boolean {
  return Math.random() > .5
}

/**
 * 随机获取数组的一个子集
 * @param arr 数组
 */
export function getArrayItemRandom <T> (arr: T[]) : T {
  const index = createRandomInt(0, arr.length - 1)
  return arr[index]
}
