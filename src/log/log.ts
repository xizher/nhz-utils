export function warn (msg: string, ...args: unknown[]) : void {
  const warnArgs = [`[FSSGIS]: ${msg}`, ...args]
  console.warn(...warnArgs)
}
