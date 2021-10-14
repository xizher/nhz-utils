import {
  timestamp,
  getMonth,
  getNextDate,
  sleep,
} from './date'

test('timestamp(): can run true', () => {
  const num = timestamp()
  const date = new Date(num)
  const date2 = new Date()
  expect(date2.getFullYear()).toBe(date.getFullYear())
  expect(date2.getMonth()).toBe(date.getMonth())
  expect(date2.getDate()).toBe(date.getDate())
  expect(date2.getHours()).toBe(date.getHours())
  expect(date2.getMinutes()).toBe(date.getMinutes())
})

test('getMonth(): can run true', () => {
  expect(getMonth()).toBe(new Date().getMonth() + 1)
  expect(getMonth(0)).toBe(1) // 1970-01-01T00:00:00.000Z -> 1月
  expect(getMonth('0')).toBe(1)
  expect(getMonth('2020/5/1')).toBe(5)
  expect(getMonth('2020/05/01')).toBe(5)
  expect(getMonth(new Date())).toBe(new Date().getMonth() + 1)
})

test('getNextDate(): can run true', () => {
  expect(getNextDate().getDate()).toBe(new Date().getDate() + 1)
  expect(getNextDate(-1).getDate()).toBe(new Date().getDate() - 1)
  expect(getNextDate(0).getDate()).toBe(new Date().getDate())
  const date = new Date('2020/05/01')
  expect(getNextDate(1, date).getDate()).toBe(2)
  expect(getNextDate(-1, date).getDate()).toBe(30)
})

test('sleep(): can run right', () => {
  const now = timestamp()
  const long = 1000
  return sleep(long).then(() => {
    expect(timestamp() - now >= long).toBeTruthy()
  })
})
