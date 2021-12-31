[cache](../README.md) / AsyncFunctionCache

# Class: AsyncFunctionCache

异步函数结果缓存器（单例）

## Table of contents

### Constructors

- [constructor](AsyncFunctionCache.md#constructor)

### Properties

- [\_cache](AsyncFunctionCache.md#_cache)
- [\_instance](AsyncFunctionCache.md#_instance)

### Methods

- [remove](AsyncFunctionCache.md#remove)
- [withCache](AsyncFunctionCache.md#withcache)

## Constructors

### constructor

• **new AsyncFunctionCache**()

构造异步函数结果缓存器

#### Defined in

[cache.ts:27](https://github.com/xizher/nhz-utils/blob/042334f/src/cache/cache.ts#L27)

## Properties

### \_cache

• `Private` **\_cache**: `Map`<[`AsyncFunction`](../README.md#asyncfunction)<`any`\>, `any`\>

缓存区

#### Defined in

[cache.ts:22](https://github.com/xizher/nhz-utils/blob/042334f/src/cache/cache.ts#L22)

___

### \_instance

▪ `Static` `Private` **\_instance**: [`AsyncFunctionCache`](AsyncFunctionCache.md)

唯一实例

#### Defined in

[cache.ts:17](https://github.com/xizher/nhz-utils/blob/042334f/src/cache/cache.ts#L17)

## Methods

### remove

▸ **remove**(`fn?`): [`AsyncFunctionCache`](AsyncFunctionCache.md)

移除缓存

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fn?` | [`AsyncFunction`](../README.md#asyncfunction)<`any`\> | 异步函数 |

#### Returns

[`AsyncFunctionCache`](AsyncFunctionCache.md)

#### Defined in

[cache.ts:39](https://github.com/xizher/nhz-utils/blob/042334f/src/cache/cache.ts#L39)

___

### withCache

▸ **withCache**<`T`\>(`fn`): `Promise`<`ReturnPromiseType`<`T`\>\>

缓存异步结果

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`AsyncFunction`](../README.md#asyncfunction)<`any`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fn` | `T` | 缓存函数 |

#### Returns

`Promise`<`ReturnPromiseType`<`T`\>\>

#### Defined in

[cache.ts:52](https://github.com/xizher/nhz-utils/blob/042334f/src/cache/cache.ts#L52)
