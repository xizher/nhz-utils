
/**
 * 首字母变小写
 * @param str 字符串
 */
export function toLowerCaseFirstIndex (str: string) : string {
  return str.replace(str[0], str[0].toLowerCase())
}
