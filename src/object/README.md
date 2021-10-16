object

# object

## Table of contents

### Functions

- [deepCopy](README.md#deepcopy)
- [deepCopyJSON](README.md#deepcopyjson)
- [extend](README.md#extend)

## Functions

### deepCopy

▸ **deepCopy**<`T`\>(`obj`): `T`

深度复制（采用递归式）

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `T` | 复制对象 |

#### Returns

`T`

#### Defined in

[object.ts:50](https://github.com/xizher/nhz-utils/blob/4645c67/src/object/object.ts#L50)

___

### deepCopyJSON

▸ **deepCopyJSON**<`T`\>(`obj`): `T`

深度复制（采用JSON解析方式）

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `T` | 复制对象 |

#### Returns

`T`

#### Defined in

[object.ts:42](https://github.com/xizher/nhz-utils/blob/4645c67/src/object/object.ts#L42)

___

### extend

▸ **extend**<`T`, `S`\>(`target`, ...`sources`): `T`

对象扩展

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object``object` |
| `S` | extends `object``T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `T` | 目标 |
| `...sources` | `S`[] | 源 |

#### Returns

`T`

#### Defined in

[object.ts:8](https://github.com/xizher/nhz-utils/blob/4645c67/src/object/object.ts#L8)
