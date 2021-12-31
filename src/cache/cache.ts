import { deepCopyJSON } from '../object'
import { Fn, ReturnPromiseType } from '../generic'

/**
 * 异步函数类型
 */
export type AsyncFunction<T = any> = Fn<Promise<T>> // eslint-disable-line

/**
 * 异步函数结果缓存器（单例）
 */
export class AsyncFunctionCache {

  /**
   * 唯一实例
   */
  private static _instance : AsyncFunctionCache

  /**
   * 缓存区
   */
  private _cache : Map<AsyncFunction, any> = new Map() // eslint-disable-line

  /**
   * 构造异步函数结果缓存器
   */
  constructor () {
    if (AsyncFunctionCache._instance) {
      return AsyncFunctionCache._instance
    }
    AsyncFunctionCache._instance = this
    return this
  }

  /**
   * 移除缓存
   * @param fn 异步函数
   */
  public remove (fn?: AsyncFunction) : this {
    if (fn) {
      this._cache.delete(fn)
    } else {
      this._cache.clear()
    }
    return this
  }

  /**
   * 缓存异步结果
   * @param fn 缓存函数
   */
  public async withCache <T extends AsyncFunction> (fn: T) : Promise<ReturnPromiseType<T>> {
    const cache = this._cache.get(fn)
    if (cache) {
      return deepCopyJSON(cache)
    }
    const ret = await fn()
    this._cache.set(fn, ret)
    return ret
  }

}

/**
 * 缓存异步结果
 * @param fn 缓存函数
 */
export function withCache <T extends AsyncFunction> (fn: T) : Promise<ReturnPromiseType<T>> {
  return new AsyncFunctionCache().withCache(fn)
}

/**
 * 移除缓存
 * @param fn 缓存函数
 */
export function removeCache (fn?: AsyncFunction) {
  return new AsyncFunctionCache().remove(fn)
}
