handle

# handle

## Table of contents

### Functions

- [makeEventListener](README.md#makeeventlistener)
- [makeInterval](README.md#makeinterval)
- [makeTimeout](README.md#maketimeout)

## Functions

### makeEventListener

▸ **makeEventListener**(`target`, `type`, `listener`): `Stop`

like addEventListener

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `Element` \| `Document` | 目标 |
| `type` | `string` | 监听类型 |
| `listener` | `EventListenerOrEventListenerObject` | 监听器 |

#### Returns

`Stop`

function which can stop the listerer

#### Defined in

[utils/src/handle/handle.ts:30](https://github.com/xizher/nhz-utils/blob/4645c67/src/handle/handle.ts#L30)

___

### makeInterval

▸ **makeInterval**(...`args`): `Stop`

like setInterval

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...args` | [callback: Function, ms?: number] | Parameters<typeof setInterval> |

#### Returns

`Stop`

function which can stop the interval handler

#### Defined in

[utils/src/handle/handle.ts:8](https://github.com/xizher/nhz-utils/blob/4645c67/src/handle/handle.ts#L8)

___

### makeTimeout

▸ **makeTimeout**(...`args`): `Stop`

like setTimeout

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...args` | [callback: Function, ms?: number] | Parameters<typeof setTimeout> |

#### Returns

`Stop`

function which can stop the timeout handler

#### Defined in

[utils/src/handle/handle.ts:18](https://github.com/xizher/nhz-utils/blob/4645c67/src/handle/handle.ts#L18)
