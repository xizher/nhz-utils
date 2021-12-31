/**
 * 警告
 * @param msg 信息
 * @param args 参数集
 */
export function warn (msg: string, ...args: unknown[]) : void {
  const warnArgs = [`[FSSGIS]: ${msg}`, ...args]
  console.warn(...warnArgs)
}
