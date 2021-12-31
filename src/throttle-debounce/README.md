throttle-debounce

# throttle-debounce

## Table of contents

### Functions

- [debounce](README.md#debounce)
- [throttle](README.md#throttle)

## Functions

### debounce

▸ **debounce**<`T`\>(`fn`, `wait`, `immediate?`): `T` & { `cancle`: () => `void`  }

防抖
（当持续触发事件时，
一定时间段内没有再触发事件，
事件处理函数才会执行一次，
如果设定的时间到来之前，
又一次触发了事件，
就重新开始延时）

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Function` |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `fn` | `T` | `undefined` | 函数 |
| `wait` | `number` | `undefined` | 延时毫秒数 |
| `immediate` | `boolean` | `false` | 是否立即执行 |

#### Returns

`T` & { `cancle`: () => `void`  }

#### Defined in

[throttle-debounce.ts:15](https://github.com/xizher/nhz-utils/blob/042334f/src/throttle-debounce/throttle-debounce.ts#L15)

___

### throttle

▸ **throttle**<`T`\>(`fn`, `wait`, `options?`): `T` & { `cancle`: () => `void`  }

节流
（当持续触发事件时，
保证一定时间段内只调用一次事件处理函数）

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Function` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fn` | `T` | 函数 |
| `wait` | `number` | 间隔毫秒数 |
| `options` | `Object` | 配置项 |
| `options.leading` | `undefined` \| `boolean` | - |
| `options.trailing` | `undefined` \| `boolean` | - |

#### Returns

`T` & { `cancle`: () => `void`  }

#### Defined in

[throttle-debounce.ts:45](https://github.com/xizher/nhz-utils/blob/042334f/src/throttle-debounce/throttle-debounce.ts#L45)
