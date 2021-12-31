cache

# cache

## Table of contents

### Classes

- [AsyncFunctionCache](classes/AsyncFunctionCache.md)

### Type aliases

- [AsyncFunction](README.md#asyncfunction)

### Functions

- [removeCache](README.md#removecache)
- [withCache](README.md#withcache)

## Type aliases

### AsyncFunction

Ƭ **AsyncFunction**<`T`\>: `Fn`<`Promise`<`T`\>\>

异步函数类型

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Defined in

[cache.ts:7](https://github.com/xizher/nhz-utils/blob/042334f/src/cache/cache.ts#L7)

## Functions

### removeCache

▸ **removeCache**(`fn?`): [`AsyncFunctionCache`](classes/AsyncFunctionCache.md)

移除缓存

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fn?` | [`AsyncFunction`](README.md#asyncfunction)<`any`\> | 缓存函数 |

#### Returns

[`AsyncFunctionCache`](classes/AsyncFunctionCache.md)

#### Defined in

[cache.ts:76](https://github.com/xizher/nhz-utils/blob/042334f/src/cache/cache.ts#L76)

___

### withCache

▸ **withCache**<`T`\>(`fn`): `Promise`<`ReturnPromiseType`<`T`\>\>

缓存异步结果

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`AsyncFunction`](README.md#asyncfunction)<`any`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fn` | `T` | 缓存函数 |

#### Returns

`Promise`<`ReturnPromiseType`<`T`\>\>

#### Defined in

[cache.ts:68](https://github.com/xizher/nhz-utils/blob/042334f/src/cache/cache.ts#L68)
