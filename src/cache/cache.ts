import { deepCopyJSON } from '../object'
import { Fn, ReturnPromiseType } from '../generic'

type AsyncFunction = Fn<Promise<any>> // eslint-disable-line

class AsyncFunctionCache {

  private static _instance : AsyncFunctionCache

  private _cache : Map<AsyncFunction, any> = new Map() // eslint-disable-line

  constructor () {
    if (AsyncFunctionCache._instance) {
      return AsyncFunctionCache._instance
    }
    AsyncFunctionCache._instance = this
    return this
  }

  public remove (fn?: AsyncFunction) : this {
    if (fn) {
      this._cache.delete(fn)
    } else {
      this._cache.clear()
    }
    return this
  }

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

export function withCache <T extends AsyncFunction> (fn: T) : Promise<ReturnPromiseType<T>> {
  return new AsyncFunctionCache().withCache(fn)
}

export function removeCache (fn?: AsyncFunction) {
  return new AsyncFunctionCache().remove(fn)
}
