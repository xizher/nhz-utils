import {
  isBoolean,
  isObject,
  isFunction,
  isNumber,
  isString,
  isNullable,
  isPromise,
} from './is'

test('isBoolean(): true and false is boolean', () => {
  expect(isBoolean(true)).toBe(true)
  expect(isBoolean(false)).toBe(true)
})

test('isBoolean(): not true or false isn\'t boolean', () => {
  expect(isBoolean( 1 )).toBe(false)
  expect(isBoolean( 0 )).toBe(false)
  expect(isBoolean( '' )).toBe(false)
  expect(isBoolean( 1n )).toBe(false)
  expect(isBoolean( [] )).toBe(false)
  expect(isBoolean( {} )).toBe(false)
  expect(isBoolean( () => void 0 )).toBe(false)
  expect(isBoolean( null )).toBe(false)
  expect(isBoolean( undefined )).toBe(false)
  expect(isBoolean( Symbol() )).toBe(false)
})

test('isObject(): function isn\'t object', () => {
  expect(isObject( () => void 0 )).toBe(false)
})

test('isObject(): {} is object', () => {
  expect(isObject( {} )).toBe(true)
})

test('isObject(): class isn\'t object', () => {
  expect(isObject( class {} )).toBe(false)
})

test('isObject(): new class is object', () => {
  const cls = class {}
  expect(isObject( new cls() )).toBe(true)
})

test('isObject(): date isn\'t object, is Date', () => {
  expect(isObject( new Date() )).toBe(false)
})

test('isFunction(): function is function', () => {
  expect(isFunction( () => void 0 )).toBe(true)
})

test('isFunction(): class is function', () => {
  expect(isFunction( class {} )).toBe(true)
})

test('isNumber(): number is number', () => {
  expect(isNumber( 0 )).toBe(true)
})

test('isNumber(): new Number() is number', () => {
  expect(isNumber( new Number() )).toBe(true)
})

test('isNumber(): bigint isn\'t number', () => {
  expect(isNumber( 1n )).toBe(false)
})

test('isString(): string is string', () => {
  expect(isString( '' )).toBe(true)
})

test('isString(): new String() is string', () => {
  expect(isString( new String() )).toBe(true)
})

test('isNullable(): null is Nullable', () => {
  expect(isNullable( null )).toBe(true)
})

test('isNullable(): undefined is Nullable', () => {
  expect(isNullable( undefined )).toBe(true)
})

test('isNullable(): void 0 is Nullable', () => {
  expect(isNullable( void 0 )).toBe(true)
})

test('isNullable(): 0 isn\'t Nullable', () => {
  expect(isNullable( 0 )).toBe(false)
})

test('isPromise(): promise is promise', () => {
  expect(isPromise( Promise.resolve() )).toBe(true)
  expect(isPromise( null )).toBe(false)
  expect(isPromise( {} )).toBe(false)
  expect(isPromise( () => void 0 )).toBe(false)
})
