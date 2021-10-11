export function makeDestructurable <
  T extends Record<string, unknown>,
  A extends readonly unknown[]
  > (obj: T, arr: A): T & A {

  const clone = { ...obj }

  Object.defineProperty(clone, Symbol.iterator, {
    enumerable: false,
    value () {
      let index = 0
      return {
        next: () => ({
          value: arr[index++],
          done: index > arr.length,
        })
      }
    }
  })

  return clone as T & A
}
