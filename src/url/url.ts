
/**
  * 加载css
  * @param cssUrl CSS路径
  */
export function loadCss (cssUrl: string, success?: () => void, error?: (err: string | Event) => void) : Promise<void> {
  return new Promise((resolve, reject) => {
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.type = 'text/css'
    link.href = cssUrl
    link.media = 'all'
    document.head.appendChild(link)
    link.onload = () => {
      success?.()
      resolve()
    }
    link.onerror = err => {
      error?.(err)
      reject(err)
    }
  })
}
/**
  * 加载js
  * @param jsUrl JS路径
  * @param success 加载成功完成回调事件
  * @param error 加载错误回调事件
  */
export function loadJs (jsUrl: string, success?: () => void, error?: (err: string | Event) => void) : Promise<void> {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = jsUrl
    document.head.appendChild(script)
    script.onload = () => {
      success?.()
      resolve()
    }
    script.onerror = err => {
      error?.(err)
      reject(err)
    }
  })
}

/**
 * 创建缓存地址
 * @param json JSON
 */
export function createJSONUrl (json: object) : [string, () => void] { // eslint-disable-line
  const url = URL.createObjectURL(new Blob([JSON.stringify(json)], { type: 'application/json' }))
  return [url, () => URL.revokeObjectURL(url)]
}
