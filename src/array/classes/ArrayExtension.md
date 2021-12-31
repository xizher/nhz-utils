[array](../README.md) / ArrayExtension

# Class: ArrayExtension<T\>

数组扩展装饰器（单例）

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

## Table of contents

### Constructors

- [constructor](ArrayExtension.md#constructor)

### Properties

- [\_target](ArrayExtension.md#_target)
- [\_instance](ArrayExtension.md#_instance)

### Accessors

- [$](ArrayExtension.md#$)
- [last](ArrayExtension.md#last)

### Methods

- [clear](ArrayExtension.md#clear)
- [equal](ArrayExtension.md#equal)
- [findItem](ArrayExtension.md#finditem)
- [findItems](ArrayExtension.md#finditems)
- [getUnique](ArrayExtension.md#getunique)
- [insert](ArrayExtension.md#insert)
- [propToArr](ArrayExtension.md#proptoarr)
- [removeIndex](ArrayExtension.md#removeindex)
- [removeValue](ArrayExtension.md#removevalue)
- [reset](ArrayExtension.md#reset)
- [unique](ArrayExtension.md#unique)

## Constructors

### constructor

• **new ArrayExtension**<`T`\>(`target`)

构造数组扩展装饰器

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `T`[] | 目标数组 |

#### Defined in

[array.ts:33](https://github.com/xizher/nhz-utils/blob/042334f/src/array/array.ts#L33)

## Properties

### \_target

• `Private` **\_target**: `T`[]

目标数组

#### Defined in

[array.ts:13](https://github.com/xizher/nhz-utils/blob/042334f/src/array/array.ts#L13)

___

### \_instance

▪ `Static` `Private` **\_instance**: [`ArrayExtension`](ArrayExtension.md)<`any`\>

唯一实例

#### Defined in

[array.ts:8](https://github.com/xizher/nhz-utils/blob/042334f/src/array/array.ts#L8)

## Accessors

### $

• `get` **$**(): `T`[]

目标数组

#### Returns

`T`[]

#### Defined in

[array.ts:18](https://github.com/xizher/nhz-utils/blob/042334f/src/array/array.ts#L18)

___

### last

• `get` **last**(): `T`

数组的最后一位

#### Returns

`T`

#### Defined in

[array.ts:25](https://github.com/xizher/nhz-utils/blob/042334f/src/array/array.ts#L25)

## Methods

### clear

▸ **clear**(): [`ArrayExtension`](ArrayExtension.md)<`T`\>

清空数组

#### Returns

[`ArrayExtension`](ArrayExtension.md)<`T`\>

#### Defined in

[array.ts:81](https://github.com/xizher/nhz-utils/blob/042334f/src/array/array.ts#L81)

___

### equal

▸ **equal**<`K`\>(`anotherArr`): `boolean`

数组对比

#### Type parameters

| Name |
| :------ |
| `K` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `anotherArr` | `K`[] | 数组 |

#### Returns

`boolean`

#### Defined in

[array.ts:137](https://github.com/xizher/nhz-utils/blob/042334f/src/array/array.ts#L137)

___

### findItem

▸ **findItem**(`propName`, `propValue`): `undefined` \| `T`

对象数组寻找值（首个）

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `propName` | keyof `T` | 属性名 |
| `propValue` | `T`[keyof `T`] | 属性值 |

#### Returns

`undefined` \| `T`

#### Defined in

[array.ts:156](https://github.com/xizher/nhz-utils/blob/042334f/src/array/array.ts#L156)

___

### findItems

▸ **findItems**(`propName`, `propValue`): `T`[]

对象数组寻找值（所有）

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `propName` | keyof `T` | 属性名 |
| `propValue` | `T`[keyof `T`] | 属性值 |

#### Returns

`T`[]

#### Defined in

[array.ts:171](https://github.com/xizher/nhz-utils/blob/042334f/src/array/array.ts#L171)

___

### getUnique

▸ **getUnique**(): `T`[]

获取唯一值

#### Returns

`T`[]

#### Defined in

[array.ts:129](https://github.com/xizher/nhz-utils/blob/042334f/src/array/array.ts#L129)

___

### insert

▸ **insert**(`index`, `value`): [`ArrayExtension`](ArrayExtension.md)<`T`\>

插入

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 位置索引 |
| `value` | `T` | 值 |

#### Returns

[`ArrayExtension`](ArrayExtension.md)<`T`\>

#### Defined in

[array.ts:48](https://github.com/xizher/nhz-utils/blob/042334f/src/array/array.ts#L48)

___

### propToArr

▸ **propToArr**(`prop`): `T`[keyof `T`][]

对象数组属性值提取

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `prop` | keyof `T` | 属性名 |

#### Returns

`T`[keyof `T`][]

#### Defined in

[array.ts:186](https://github.com/xizher/nhz-utils/blob/042334f/src/array/array.ts#L186)

___

### removeIndex

▸ **removeIndex**(`index`): [`ArrayExtension`](ArrayExtension.md)<`T`\>

移除

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 位置索引 |

#### Returns

[`ArrayExtension`](ArrayExtension.md)<`T`\>

#### Defined in

[array.ts:57](https://github.com/xizher/nhz-utils/blob/042334f/src/array/array.ts#L57)

▸ **removeIndex**(`index`, `returnRemoveItem?`): `T`

移除

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 位置索引 |
| `returnRemoveItem?` | ``true`` | 是否范围移除值 |

#### Returns

`T`

#### Defined in

[array.ts:63](https://github.com/xizher/nhz-utils/blob/042334f/src/array/array.ts#L63)

___

### removeValue

▸ **removeValue**(`value`, `removeMany?`): [`ArrayExtension`](ArrayExtension.md)<`T`\>

移除值

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `value` | `T` | `undefined` | 值 |
| `removeMany` | `boolean` | `false` | 是否移除多个 |

#### Returns

[`ArrayExtension`](ArrayExtension.md)<`T`\>

#### Defined in

[array.ts:100](https://github.com/xizher/nhz-utils/blob/042334f/src/array/array.ts#L100)

___

### reset

▸ **reset**(...`items`): [`ArrayExtension`](ArrayExtension.md)<`T`\>

重置数组

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...items` | `T`[] | 值 |

#### Returns

[`ArrayExtension`](ArrayExtension.md)<`T`\>

#### Defined in

[array.ts:90](https://github.com/xizher/nhz-utils/blob/042334f/src/array/array.ts#L90)

___

### unique

▸ **unique**(): [`ArrayExtension`](ArrayExtension.md)<`T`\>

唯一值处理

#### Returns

[`ArrayExtension`](ArrayExtension.md)<`T`\>

#### Defined in

[array.ts:121](https://github.com/xizher/nhz-utils/blob/042334f/src/array/array.ts#L121)
