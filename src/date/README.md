date

# date

## Table of contents

### Functions

- [getMonth](README.md#getmonth)
- [getNextDate](README.md#getnextdate)
- [sleep](README.md#sleep)
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

[date.ts:14](https://github.com/xizher/nhz-utils/blob/f583067/src/date/date.ts#L14)

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

[date.ts:33](https://github.com/xizher/nhz-utils/blob/f583067/src/date/date.ts#L33)

___

### sleep

▸ **sleep**(`timestamp`): `Promise`<`void`\>

等待

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `timestamp` | `number` | 时间戳 |

#### Returns

`Promise`<`void`\>

#### Defined in

[date.ts:41](https://github.com/xizher/nhz-utils/blob/f583067/src/date/date.ts#L41)

___

### timestamp

▸ **timestamp**(): `number`

获取当前时间戳

#### Returns

`number`

#### Defined in

[date.ts:6](https://github.com/xizher/nhz-utils/blob/f583067/src/date/date.ts#L6)
