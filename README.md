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
| date              | 日期与时间模块 |
| format            | 格式化模块     |
| handle            | handle模块     |
| is                | 判断模块       |
| object            | 对象操作模块   |
| random            | 随机模块       |
| throttle-debounce | 防抖节流模块   |
| watch             | 监听模块       |

## Debug

在src目录中修改或编写相应的模块，并对新功能编写单元测试，测试满足条件后使用命令 `npm run build:对应模块名` 进行打包和 `npm run readme` 更新模块README文件。

单元测试执行命令
```bash
npm run test
npm run test:dev
```

...


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
