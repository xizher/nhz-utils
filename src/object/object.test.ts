import {
  extend,
  deepCopy,
  deepCopyJSON,
} from './object'

test('expect(): can run right', () => {
  expect(extend({ a: 1 }).a).toBe(1)
  expect(extend({ a: 1 } as any, undefined).a).toBe(1) // eslint-disable-line
  expect(extend({ a: 1 } as any, null).a).toBe(1) // eslint-disable-line

  const obj1 = {
    a: 1,
    b: 2,
    aa: { a: 't', b: 'q' }
  } as any // eslint-disable-line
  const obj2 = {
    a: -1,
    c: 3,
  } as any // eslint-disable-line
  const obj3 = {
    aa: { a: 's', c: 'n' },
    bb: { b: false }
  } as any // eslint-disable-line
  const obj = extend(obj1, obj2, obj3)
  expect(obj.a).toBe(-1)
  expect(obj.c).toBe(3)
  expect(obj.aa.a).toBe('s')
  expect(obj.aa.b).toBe('q')
  expect(obj.aa.c).toBe('n')
  expect(obj.bb.b).toBe(false)
})

test('deepCopyJSON(): can run right', () => {
  expect(deepCopyJSON({ a: 1 }).a).toBe(1)
})

test('deepCopy(): can run right', () => {
  const obj = { a: 1, aa: { aa: 2 } }
  expect(deepCopy(obj).a).toBe(1)
  expect(deepCopy(obj).aa !== obj.aa).toBeTruthy()

  const arr = [1, 2, { a: 2 }]
  expect(deepCopy(arr).length).toBe(3)

})
