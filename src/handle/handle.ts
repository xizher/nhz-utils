type Stop = () => void

/**
 * like setInterval
 * @param args Parameters<typeof setInterval>
 * @returns function which can stop the interval handler
 */
export function makeInterval (...args: Parameters<typeof setInterval>) : Stop {
  const id = setInterval(...args)
  return () => clearInterval(id)
}

/**
 * like setTimeout
 * @param args Parameters<typeof setTimeout>
 * @returns function which can stop the timeout handler
 */
export function makeTimeout (...args: Parameters<typeof setTimeout>) : Stop {
  const id = setTimeout(...args)
  return () => clearTimeout(id)
}

/**
 * like addEventListener
 * @param target 目标
 * @param type 监听类型
 * @param listener 监听器
 * @returns function which can stop the listerer
 */
export function makeEventListener (target: Element | Document, type: string, listener: EventListenerOrEventListenerObject) : Stop {
  target.addEventListener(type, listener)
  return () => target.removeEventListener(type, listener)
}