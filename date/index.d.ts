/**
 * 获取当前时间戳
 */
declare function timestamp(): number;
/**
 * 获取当前月份
 * @param date 日期，默认当前日期
 */
declare function getMonth(date?: Date | number | string): number;
/**
 * 获取递进日期
 * @param nDays 天数，默认为1天
 * @param date 日期，默认为当前日期
 */
declare function getNextDate(nDays?: number, date?: Date): Date;

export { getMonth, getNextDate, timestamp };
