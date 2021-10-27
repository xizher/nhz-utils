/**
 * 读取文件内容
 * @param file 文件
 * @param encoding 编码
 */
export function readFileAsText (file: File, encoding?: string) : Promise<string> {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader()
    fileReader.onload = e => {
      const content = e.target?.result ?? ''
      resolve(String(content))
    }
    fileReader.onerror = err => {
      reject(err)
    }
    fileReader.readAsText(file, encoding)
  })
}
/**
 * 读取文件内容并转为JSON对象
 * @param file 文件
 * @param encoding 编码
 */
export async function readFileAsJSON<T> (file: File, encoding?: string) : Promise<T> {
  const content = await readFileAsText(file)
  return JSON.parse(content)
}
