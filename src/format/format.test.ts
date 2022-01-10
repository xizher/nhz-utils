import {
  formatDate,
  formatCash,
  formatChineseNumber,
  formatString,
} from './format'

test('formatDate(): can run right', () => {
  expect(formatDate('yyyy')).toBe(String(new Date().getFullYear()))
  expect(formatDate('MM', 0)).toBe('01')
  expect(formatDate('dd', '1')).toBe('01')
  const dateStr = '1999/04/14 00:11:22'
  expect(formatDate('yyyy/MM/dd hh:mm:ss', new Date(dateStr))).toBe(dateStr)
  expect(formatDate('yyyy/MM/dd hh:mm:ss', dateStr)).toBe(dateStr)
  const dateStr2 = '1999/4/14 0:11:22'
  expect(formatDate('yyyy/M/dd h:mm:ss', dateStr)).toBe(dateStr2)
})

test('formatCash(): can run right', () => {
  expect(formatCash(1000)).toBe('1,000')
  expect(formatCash('-1000')).toBe('-1,000')
  expect(formatCash('abcde')).toBe('abcde')
})

test('formatChineseNumber() can run', () => {
  expect(formatChineseNumber(100000000)).toBe('一亿')
  expect(formatChineseNumber('1.1')).toBe('一点一')
  expect(formatChineseNumber(1.00000001)).toBe('一点零零零零零零零一')
  expect(formatChineseNumber(10000)).toBe('一万')
  expect(formatChineseNumber('101')).toBe('一百零一')
  expect(formatChineseNumber('abcde')).toBe('abcde')
})


test('formatString() can run', () => {
  expect(formatString('{0} is {1} years old and likes {2}', 'John', 30, 'pizza')).toBe('John is 30 years old and likes pizza')
})
