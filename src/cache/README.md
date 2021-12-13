cache

# cache

## Table of contents

### Functions

- [removeCache](README.md#removecache)
- [withCache](README.md#withcache)

## Functions

### removeCache

▸ **removeCache**(`fn?`): `AsyncFunctionCache`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn?` | `AsyncFunction` |

#### Returns

`AsyncFunctionCache`

#### Defined in

[cache.ts:45](https://github.com/xizher/nhz-utils/blob/f583067/src/cache/cache.ts#L45)

___

### withCache

▸ **withCache**<`T`\>(`fn`): `Promise`<`ReturnPromiseType`<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `AsyncFunction` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | `T` |

#### Returns

`Promise`<`ReturnPromiseType`<`T`\>\>

#### Defined in

[cache.ts:41](https://github.com/xizher/nhz-utils/blob/f583067/src/cache/cache.ts#L41)
