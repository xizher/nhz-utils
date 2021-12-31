watch

# watch

## Table of contents

### Classes

- [Observable](classes/Observable.md)

### Interfaces

- [IObservableCallbackParams](interfaces/IObservableCallbackParams.md)
- [IObservableHandle](interfaces/IObservableHandle.md)

### Type aliases

- [IObservableCallback](README.md#iobservablecallback)

## Type aliases

### IObservableCallback

Ƭ **IObservableCallback**<`T`, `NAME`, `THIS`, `RET`\>: (`e`: `T` & [`IObservableCallbackParams`](interfaces/IObservableCallbackParams.md)<`NAME`, `THIS`\>) => `RET`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `NAME` | `NAME` |
| `THIS` | `THIS` |
| `RET` | `void` |

#### Type declaration

▸ (`e`): `RET`

监听回调函数

##### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `T` & [`IObservableCallbackParams`](interfaces/IObservableCallbackParams.md)<`NAME`, `THIS`\> |

##### Returns

`RET`

#### Defined in

[observable.ts:28](https://github.com/xizher/nhz-utils/blob/042334f/src/watch/observable.ts#L28)
