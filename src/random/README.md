random

# random

## Table of contents

### Functions

- [createRandomBool](README.md#createrandombool)
- [createRandomInt](README.md#createrandomint)
- [createUid](README.md#createuid)
- [getArrayItemRandom](README.md#getarrayitemrandom)

## Functions

### createRandomBool

▸ **createRandomBool**(): `boolean`

创建随机布尔值

#### Returns

`boolean`

#### Defined in

[random.ts:31](https://github.com/xizher/nhz-utils/blob/4645c67/src/random/random.ts#L31)

___

### createRandomInt

▸ **createRandomInt**(`min?`, `max?`): `number`

创建指定范围的随机整数

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `min` | `number` | `0` | 最小 |
| `max` | `number` | `1` | 最大 |

#### Returns

`number`

#### Defined in

[random.ts:22](https://github.com/xizher/nhz-utils/blob/4645c67/src/random/random.ts#L22)

___

### createUid

▸ **createUid**(`isGuid?`): `string`

创建唯一码

**`example`**
```js
createUid() // -> xxxxxxxx
createUid(true) // -> xxxxxxxx-xxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `isGuid?` | ``true`` | 是否Guid标准的唯一码，默认为false |

#### Returns

`string`

#### Defined in

[random.ts:10](https://github.com/xizher/nhz-utils/blob/4645c67/src/random/random.ts#L10)

___

### getArrayItemRandom

▸ **getArrayItemRandom**<`T`\>(`arr`): `T`

随机获取数组的一个子集

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arr` | `T`[] | 数组 |

#### Returns

`T`

#### Defined in

[random.ts:39](https://github.com/xizher/nhz-utils/blob/4645c67/src/random/random.ts#L39)
