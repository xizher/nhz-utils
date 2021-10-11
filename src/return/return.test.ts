import { makeDestructurable } from './return'

test('makeDestructurable(): can run right with { /* ... */ }', () => {
  const obj1 = Symbol()
  const obj2 = new Date()

  const ret = makeDestructurable(
    { obj1, obj2 },
    [obj1, obj2] as const
  )

  const { obj1: _obj1, obj2: _obj2 } = ret

  expect(_obj1).toBe(obj1)
  expect(_obj2).toBe(obj2)
})

test('makeDestructurable(): can run right with [/* ... */]', () => {
  const obj1 = Symbol()
  const obj2 = new Date()

  const ret = makeDestructurable(
    { obj1, obj2 },
    [obj1, obj2] as const
  )

  const [_obj1, _obj2] = ret
  expect(_obj1).toBe(obj1)
  expect(_obj2).toBe(obj2)
})
