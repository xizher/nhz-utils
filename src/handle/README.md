handle

# handle

## Table of contents

### Functions

- [makeEventListener](README.md#makeeventlistener)
- [makeInterval](README.md#makeinterval)
- [makeObservable](README.md#makeobservable)
- [makePromiseInterval](README.md#makepromiseinterval)
- [makeTimeout](README.md#maketimeout)

## Functions

### makeEventListener

▸ **makeEventListener**(`target`, `type`, `listener`): `Stop`

like addEventListener

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `Element` \| `Document` \| `Window` | 目标 |
| `type` | `string` | 监听类型 |
| `listener` | `EventListenerOrEventListenerObject` | 监听器 |

#### Returns

`Stop`

function which can stop the listerer

#### Defined in

[packages/utils/src/handle/handle.ts:33](https://github.com/xizher/nhz-utils/blob/042334f/src/handle/handle.ts#L33)

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

[packages/utils/src/handle/handle.ts:11](https://github.com/xizher/nhz-utils/blob/042334f/src/handle/handle.ts#L11)

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

[packages/utils/src/handle/handle.ts:44](https://github.com/xizher/nhz-utils/blob/042334f/src/handle/handle.ts#L44)

___

### makePromiseInterval

▸ **makePromiseInterval**(`handler`, `interval?`): () => `boolean`

like setInterval

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `handler` | (...`args`: `any`[]) => `Promise`<`any`\> | `undefined` | 异步函数 |
| `interval` | `number` | `0` | 间隔时间戳 |

#### Returns

`fn`

▸ (): `boolean`

##### Returns

`boolean`

#### Defined in

[packages/utils/src/handle/handle.ts:54](https://github.com/xizher/nhz-utils/blob/042334f/src/handle/handle.ts#L54)

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

[packages/utils/src/handle/handle.ts:21](https://github.com/xizher/nhz-utils/blob/042334f/src/handle/handle.ts#L21)
