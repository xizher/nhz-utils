export function fireEvent <T> (eventKey: string, detail?: T) {
  const event = new CustomEvent(eventKey, { detail })
  window.dispatchEvent(event)
}

export function listenEvent <T> (eventKey: string, fn: (detail: T) => void) {
  const _fn = (e: any) => fn(e.detail) // eslint-disable-line
  window.addEventListener(eventKey, _fn)
  const stop = () => window.removeEventListener(eventKey, _fn)
  return stop
}
