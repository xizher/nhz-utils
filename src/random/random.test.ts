import {
  createUid,
  createRandomInt,
  createRandomBool,
  getArrayItemRandom,
} from './random'

test('createUid(): can run right', () => {
  expect(createUid().length).toBe(8)
  expect(createUid() !== createUid()).toBeTruthy()
  expect(createUid(true).length).toBe(36)
  console.log(createUid(true))
  expect(createUid(true) !== createUid(true)).toBeTruthy()
})

test('createRandomInt(): can run right', () => {
  expect(createRandomInt(1, 1.2)).toBe(1)
  expect(createRandomInt(1.1, 2)).toBe(2)
  expect([0, 1].includes(createRandomInt())).toBeTruthy()
  expect([2, 3, 4, 5].includes(createRandomInt(2, 5))).toBeTruthy()
})

test('createRandomInt(): can run right', () => {
  expect([true, false].includes(createRandomBool())).toBeTruthy()
  expect(typeof createRandomBool() === 'boolean').toBeTruthy()
})

test('createRandomInt(): can run right', () => {
  const arr = [1, 2, new Date(), new String()]
  expect(arr.includes(getArrayItemRandom(arr))).toBeTruthy()
})
