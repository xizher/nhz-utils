/**
 * 装饰器：日志
 * @param msg 信息
 */
export function Log (msg: string) : MethodDecorator {
  return (target, key, descriptor) => {
    console.log(msg, target, key, descriptor)
  }
}
