return

# return

## Table of contents

### Functions

- [makeDestructurable](README.md#makedestructurable)
- [whenReture](README.md#whenreture)

## Functions

### makeDestructurable

▸ **makeDestructurable**<`T`, `A`\>(`obj`, `arr`): `T` & `A`

Destructuring with object or array

**`link`** https://antfu.me/posts/destructuring-with-object-or-array

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Record`<`string`, `unknown`\> |
| `A` | extends readonly `unknown`[] |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `T` | Destructuring with object |
| `arr` | `A` | Destructuring with array |

#### Returns

`T` & `A`

#### Defined in

[return.ts:9](https://github.com/xizher/nhz-utils/blob/f583067/src/return/return.ts#L9)

___

### whenReture

▸ **whenReture**<`T`\>(`intervalTime`, `fn`, `target?`): `Promise`<`NonNullable`<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `intervalTime` | `number` |
| `fn` | `Fn`<`T`\> |
| `target` | `Function` |

#### Returns

`Promise`<`NonNullable`<`T`\>\>

#### Defined in

[return.ts:32](https://github.com/xizher/nhz-utils/blob/f583067/src/return/return.ts#L32)
