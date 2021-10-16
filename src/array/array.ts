class ArrayExtension<T = any> { // eslint-disable-line
  private static _instance : ArrayExtension

  private _target: T[]

  public get $ () : T[] {
    return this._target
  }

  public get last () : T {
    return this._target[this._target.length - 1]
  }

  constructor (target: T[]) {
    if (ArrayExtension._instance) {
      ArrayExtension._instance._target = target
      return ArrayExtension._instance
    }
    this._target = target
    ArrayExtension._instance = this
    return this
  }

  public insert (index: number, value: T) : this {
    this._target.splice(index, 0, value)
    return this
  }

  public removeIndex (index: number) : this
  public removeIndex (index: number, returnRemoveItem?: true) : T
  public removeIndex (index: number, returnRemoveItem?: boolean) : this | T {
    const value = this._target[index]
    this._target.splice(index, 1)
    if (returnRemoveItem) {
      return value
    }
    return this
  }

  public clear () : this {
    this._target.splice(0, this._target.length)
    return this
  }
  public reset (...items: T[]): this {
    this._target.splice(0, this._target.length, ...items)
    return this
  }

  public removeValue (value: T, removeMany = false) : this {
    if (removeMany) {
      for (let i = 0; i < this._target.length; i++) {
        if (this._target[i] === value) {
          this._target.splice(i--, 1)
        }
      }
    } else {
      for (let i = 0; i < this._target.length; i++) {
        if (this._target[i] === value) {
          this._target.splice(i--, 1)
          break
        }
      }
    }
    return this
  }

  public unique () : this {
    this.reset(...new Set(this._target as T[]))
    return this
  }

  public getUnique () : T[] {
    return [...new Set(this._target)]
  }

  public equal<K> (anotherArr: K[]) : boolean {
    if (this._target.length !== anotherArr.length) {
      return false
    }
    for (let i = 0; i < this._target.length; i++) {
      // eslint-disable-next-line
      // @ts-ignore
      if (this._target[i] !== anotherArr[i]) {
        return false
      }
    }
    return true
  }

  public findItem (propName: keyof T, propValue: T[keyof T]) : T | undefined {
    for (let i = 0; i < this._target.length; i++) {
      const item = this._target[i]
      if (item[propName] === propValue) {
        return item
      }
    }
    return undefined
  }

  public findItems (propName: keyof T, propValue: T[keyof T]) : T[] {
    const result : T[] = []
    for (let i = 0; i < this._target.length; i++) {
      const item = this._target[i]
      if (item[propName] === propValue) {
        result.push(item)
      }
    }
    return result
  }

  public propToArr (prop: keyof T) : T[keyof T][] {
    return this._target.map(item => item[prop])
  }

}

export function arr<T> (target: T[]) : ArrayExtension<T> {
  return new ArrayExtension(target)
}

export function toArray<T> (target: T | T[]) : T[] {
  return Array.isArray(target) ? target : [target]
}

export default arr
