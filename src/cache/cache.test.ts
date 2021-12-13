import { withCache, removeCache } from './cache'

test('withCache() can run', async () => {
  let count = 0
  const testFunc = () => {
    count++
    return Promise.resolve(123)
  }
  const result = await withCache(testFunc)
  expect(result).toBe(123)
  expect(count).toBe(1)
  const result2 = await withCache(testFunc)
  expect(result2).toBe(123)
  expect(count).toBe(1)

})

test('removeCache() can run with fn param', async () => {
  let count = 0
  const testFunc = () => {
    count++
    return Promise.resolve(123)
  }
  const result = await withCache(testFunc)
  expect(result).toBe(123)
  expect(count).toBe(1)
  const result2 = await withCache(testFunc)
  expect(result2).toBe(123)
  expect(count).toBe(1)
  removeCache(testFunc)
  const result3 = await withCache(testFunc)
  expect(result3).toBe(123)
  expect(count).toBe(2)

})

test('removeCache() can run without fn param', async () => {
  let count = 0
  const testFunc = () => {
    count++
    return Promise.resolve(123)
  }
  const result = await withCache(testFunc)
  expect(result).toBe(123)
  expect(count).toBe(1)
  const result2 = await withCache(testFunc)
  expect(result2).toBe(123)
  expect(count).toBe(1)
  removeCache()
  const result3 = await withCache(testFunc)
  expect(result3).toBe(123)
  expect(count).toBe(2)

})
