import { sleep } from '../date'
import {
  throttle,
  debounce,
} from './throttle-debounce'


test('debounce(): can run right', async () => {
  let count = 0
  const debounceFunc = debounce(() => count++, 1000)
  debounceFunc() // +1
  debounceFunc()
  debounceFunc()
  await sleep(1100)
  expect(count).toBe(1)
  debounceFunc() // +1
  await sleep(1100)
  expect(count).toBe(2)
})

test('debounce(): can run right with immediate', async () => {
  let count = 0
  const debounceFunc = debounce(() => count++, 1000, true)
  debounceFunc() // +1
  debounceFunc()
  debounceFunc()
  expect(count).toBe(1)
  await sleep(1100)
  debounceFunc() // +1
  expect(count).toBe(2)
})

test('throttle(): can run right', async () => {
  let count = 0
  const throttleFunc = throttle(() => count++, 1000)
  throttleFunc() // +1
  expect(count).toBe(1)
  throttleFunc()
  throttleFunc() // +1
  await sleep(1100)
  expect(count).toBe(2)
  throttleFunc() // +1
  await sleep(1100)
  expect(count).toBe(3)
})

test('throttle(): can run right with { leading: false, trailing: true }', async () => {
  let count = 0
  const throttleFunc = throttle(() => count++, 1000, { leading: false, trailing: true })
  throttleFunc()
  throttleFunc()
  throttleFunc() // +1
  await sleep(1100)
  expect(count).toBe(1)
  throttleFunc() // +1
  await sleep(1100)
  expect(count).toBe(2)
})

test('throttle(): can run right with { leading: true, trailing: false }', async () => {
  let count = 0
  const throttleFunc = throttle(() => count++, 1000, { leading: true, trailing: false })
  throttleFunc()
  expect(count).toBe(1)
  throttleFunc()
  throttleFunc() // +1
  await sleep(1100)
  throttleFunc() // +1
  await sleep(1100)
  expect(count).toBe(2)
})

test('throttle(): can run right with { leading: false, trailing: false }', async () => {
  let count = 0
  const throttleFunc = throttle(() => count++, 1000, { leading: false, trailing: false })
  throttleFunc()
  throttleFunc()
  throttleFunc()
  await sleep(1100)
  throttleFunc() // +1
  await sleep(1100)
  expect(count).toBe(1)
})

