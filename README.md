# nhz-utils

【@nhz/utils】Collection of common JavaScript / TypeScript utils 🌏

- use `typescript`
- build with `rollup`
- support `esmodules` and `commonjs`
- support `tree-shaking`

## Installation

Use the package manager [npm](https://nodejs.org/en/download/) to install `@nhz/utils`.

```bash
npm install @nhz/utils
```

## Usage

```js
import { /* ... */ } from '@nhz/utils'
```
or import from what module you need
```js
import { /* ... */ } from '@nhz/utils/xxx' // xxx is a module name
```

## Modules

| module name       | description    |
| ----------------- | -------------- |
| array             | 数组模块       |
| file              | 文件处理模块   |
| date              | 日期与时间模块 |
| format            | 格式化模块     |
| generic           | 泛型集成模块   |
| handle            | handle模块     |
| is                | 判断模块       |
| log               | 日志模块       |
| object            | 对象操作模块   |
| random            | 随机模块       |
| throttle-debounce | 防抖节流模块   |
| transfor          | 变换模块       |
| url               | 地址模块       |
| watch             | 监听模块       |

## Debug

在src目录中修改或编写相应的模块，并对新功能编写单元测试，测试满足条件后使用命令 `npm run build:对应模块名` 进行打包和 `npm run readme` 更新模块README文件。

单元测试执行命令
```bash
npm run test
npm run test:dev
```

...

https://plantuml.com/

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## All Functions

| Function                             | Description          | Function                           | Description            |
| ------------------------------------ | -------------------- | ---------------------------------- | ---------------------- |
| array/`arr()`                        | 数组拓展方法装饰器   | array/`toArray()`                  | 转化为数组             |
| date/`getMonth()`                    | 获取月份             | date/`getNextDate()`               | 获取下一日期           |
| date/`sleep()`                       | 异步等待             | date/`timestamp()`                 | 获取当前时间戳         |
| file/`readFileAsJSON()`              | 读取文件JSON格式内容 | file/`readFileAsText()`            | 读取文件内容           |
| format/`formatCash()`                | 现金格式化           | format/`formatChineseNumber()`     | 中文数字格式化         |
| format/`formatDate()`                | 日期格式化           | generic/`Arrayable<>`              | 可能为数组类型         |
| generic/`Concrete<>`                 | 递归必选类型         | generic/`Fn<>`                     | 函数类型               |
| generic/`IsomorphicDestructurable<>` | 数据对象解构类型     | generic/`NonArray<>`               | 非数组类型             |
| generic/`Nullable<>`                 | 可能为空类型         | generic/`Optional<>`               | 递归可选类型           |
| generic/`ReturnPromiseType<>`        | Promise返回类型      | handle/`makeEventListener()`       | Dom监听                |
| handle/`makeInterval()`              | setInterval处理器    | handle/`makeObservable()`          | Observable.on处理器    |
| handle/`makeTimeout()`               | setTimeout处理器     | is/`isBoolean()`                   | 是否为bool类型         |
| is/`isFunction()`                    | 是否为函数类型       | is/`isNullable()`                  | 是否为null或未定义类型 |
| is/`isNumber()`                      | 是否为数值类型       | is/`isObject()`                    | 是否为对象类型         |
| is/`isPromise()`                     | 是否为Promise类型    | is/`isString()`                    | 是否为字符串类型       |
| log/`warn()`                         | 提醒                 | object/`deepCopy()`                | 深度复制               |
| object/`deepCopyJSON()`              | 深度复制             | object/`extend()`                  | 深度扩展               |
| object/`filterObjectIncludeKeys()`   | 对象成员过滤         | object/`filterObjectExcludeKeys()` | 对象成员过滤           |
| random/`createRandomBool()`          | 创建随机bool值       | random/`createRandomInt()`         | 创建随机整数           |
| random/`createUid()`                 | 创建随机Uid          | random/`getArrayItemRandom()`      | 随机获取数组一集合     |
| return/`makeDestructurable()`        | Destructuring with object or array | throttle-debounce/`debounce()` | 防抖         |
| throttle-debounce/`throttle()`       | 节流                 | transfor/`toLowerCaseFirstIndex()` | 首字母变小写          |
| url/`loadCss()`                      | 加载css              | url/`loadJs()`                     | 记载js               |
| url/`createUrlFromBlob()`            | 创建缓存路径          | url/`createJSONUrl()`              | 创建缓存地址          |
