/**
 * 日期格式化
 * @param fmt 日期格式
 * @param date 日期
 */
declare function formatDate(fmt: string, date?: Date | number | string): string;
/**
 * 现金格式化
 * @param num 数值
 */
declare function formatCash(num: number | string): string;
/**
 * 转为中文数字
 * @param num 数值
 */
declare function formatChineseNumber(num: number | string): string;

export { formatCash, formatChineseNumber, formatDate };
