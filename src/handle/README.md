handle

# handle

## Table of contents

### Functions

- [makeEventListener](README.md#makeeventlistener)
- [makeInterval](README.md#makeinterval)
- [makeObservable](README.md#makeobservable)
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

[packages/utils/src/handle/handle.ts:32](https://github.com/xizher/nhz-utils/blob/55c3ef3/src/handle/handle.ts#L32)

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

[packages/utils/src/handle/handle.ts:10](https://github.com/xizher/nhz-utils/blob/55c3ef3/src/handle/handle.ts#L10)

___

### makeObservable

▸ **makeObservable**<`T`, `K`\>(`target`, `type`, `listener`): `Stop`

like observable.on

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `Observable`<`T`\> | 目标 |
| `type` | `K` | 监听类型 |
| `listener` | `IObservableCallback`<`T`[`K`], `K`, `any`, `void`\> | 监听器 |

#### Returns

`Stop`

#### Defined in

[packages/utils/src/handle/handle.ts:43](https://github.com/xizher/nhz-utils/blob/55c3ef3/src/handle/handle.ts#L43)

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

[packages/utils/src/handle/handle.ts:20](https://github.com/xizher/nhz-utils/blob/55c3ef3/src/handle/handle.ts#L20)
