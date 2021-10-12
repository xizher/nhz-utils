date

# date

## Table of contents

### Functions

- [getMonth](README.md#getmonth)
- [getNextDate](README.md#getnextdate)
- [timestamp](README.md#timestamp)

## Functions

### getMonth

▸ **getMonth**(`date?`): `number`

获取当前月份

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `date?` | `string` \| `number` \| `Date` | 日期，默认当前日期 |

#### Returns

`number`

#### Defined in

[date.ts:14](https://github.com/xizher/nhz-utils/blob/af84f98/src/date/date.ts#L14)

___

### getNextDate

▸ **getNextDate**(`nDays?`, `date?`): `Date`

获取递进日期

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `nDays` | `number` | `1` | 天数，默认为1天 |
| `date` | `Date` | `undefined` | 日期，默认为当前日期 |

#### Returns

`Date`

#### Defined in

[date.ts:33](https://github.com/xizher/nhz-utils/blob/af84f98/src/date/date.ts#L33)

___

### timestamp

▸ **timestamp**(): `number`

获取当前时间戳

#### Returns

`number`

#### Defined in

[date.ts:6](https://github.com/xizher/nhz-utils/blob/af84f98/src/date/date.ts#L6)
