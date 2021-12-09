export function Log (msg: string) : MethodDecorator {
  return (target, key, descriptor) => {
    console.log(msg, target, key, descriptor)
  }
}
