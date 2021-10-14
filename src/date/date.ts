import { isNullable } from '../is'

/**
 * 获取当前时间戳
 */
export function timestamp () : number {
  return Date.now()
}

/**
 * 获取当前月份
 * @param date 日期，默认当前日期
 */
export function getMonth (date?: Date | number | string) : number {
  if (isNullable(date)) {
    return new Date().getMonth() + 1
  }
  if (date instanceof Date) {
    return date.getMonth() + 1
  }
  if (isNaN(date as number)) {
    return new Date(date).getMonth() + 1
  } else {
    return new Date(+date).getMonth() + 1
  }
}

/**
 * 获取递进日期
 * @param nDays 天数，默认为1天
 * @param date 日期，默认为当前日期
 */
export function getNextDate (nDays = 1, date = new Date()) : Date {
  return new Date(date.getTime() + 24 * 60 * 60 * 1000 * Number(+nDays))
}

/**
 * 等待
 * @param timestamp 时间戳
 */
export function sleep (timestamp: number) : Promise<void> {
  return new Promise(resolve => {
    setTimeout(() => resolve(), timestamp)
  })
}
