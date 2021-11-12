import { isObject } from '../is'

/**
 * 对象扩展
 * @param target 目标
 * @param sources 源
 */
export function extend <T extends object = object, S extends T = T> (target: T, ...sources: S[]) : T {
  if (!sources.length) {
    return target as T
  }

  const source = sources.shift()
  if (source === undefined) {
    return target as T
  }

  if (isMergableObject(target) && isMergableObject(source)) {
    Object.keys(source).forEach((key) => {
      if (isMergableObject(source[key])) {
        if (!target[key]) {
          target[key] = {}
        }
        extend(target[key], source[key])
      } else {
        target[key] = source[key]
      }
    })
  }

  return extend(target, ...sources)

  function isMergableObject (item: T): item is T {
    return isObject(item) && !Array.isArray(item)
  }
}

/**
 * 深度复制（采用JSON解析方式）
 * @param obj 复制对象
 */
export function deepCopyJSON<T> (obj: T) : T {
  return JSON.parse(JSON.stringify(obj))
}

/**
  * 深度复制（采用递归式）
  * @param obj 复制对象
  */
export function deepCopy <T> (obj: T) : T {
  const newObj = (Array.isArray(obj) ? [] : {}) as T
  for (const key in obj) {
    // if (Object.prototype.hasOwnProperty.call(obj, key)) {
    newObj[key] = typeof obj[key] === 'object' && obj[key] !== null
      ? deepCopy(obj[key])
      : obj[key]
    // }
  }
  return newObj as T
}

/**
 * 对象成员过滤
 * @param obj 对象
 * @param keys 保留的键
 */
export function filterObjectIncludeKeys <T extends object, K extends keyof T> (obj: T, keys: K[]) : Pick<T, K> {
  return Object.fromEntries(
    Object.entries(obj)
      .filter(([key]) => this.tableFields_.includes(key))
  ) as Pick<T, K>
}
