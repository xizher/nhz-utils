[watch](../README.md) / Observable

# Class: Observable<T\>

主动监听类

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Constructors

- [constructor](Observable.md#constructor)

### Properties

- [\_eventMap](Observable.md#_eventmap)

### Methods

- [fire](Observable.md#fire)
- [off](Observable.md#off)
- [on](Observable.md#on)
- [once](Observable.md#once)

## Constructors

### constructor

• **new Observable**<`T`\>()

构造主动监听对象

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[observable.ts:44](https://github.com/xizher/nhz-utils/blob/8d62316/src/watch/observable.ts#L44)

## Properties

### \_eventMap

• `Private` **\_eventMap**: `Map`<keyof `T`, [`IObservableCallback`](../README.md#iobservablecallback)<`any`, `string`, [`Observable`](Observable.md)<`T`\>, `void`\>[]\>

监听事件池

#### Defined in

[observable.ts:39](https://github.com/xizher/nhz-utils/blob/8d62316/src/watch/observable.ts#L39)

## Methods

### fire

▸ **fire**<`K`\>(`name`, `data?`): [`Observable`](Observable.md)<`T`\>

触发监听函数

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `K` | 监听函数名 |
| `data?` | `T`[`K`] | 数据 |

#### Returns

[`Observable`](Observable.md)<`T`\>

#### Defined in

[observable.ts:99](https://github.com/xizher/nhz-utils/blob/8d62316/src/watch/observable.ts#L99)

___

### off

▸ **off**<`K`\>(`name`, `callback?`): `void`

移除监听函数

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `K` | 监听类型名 |
| `callback?` | [`IObservableCallback`](../README.md#iobservablecallback)<`T`[`K`], `K`, [`Observable`](Observable.md)<`T`\>, `void`\> | 监听回调函数（不指定者移除所有） |

#### Returns

`void`

#### Defined in

[observable.ts:74](https://github.com/xizher/nhz-utils/blob/8d62316/src/watch/observable.ts#L74)

___

### on

▸ **on**<`K`\>(`name`, `callback`): [`IObservableHandle`](../interfaces/IObservableHandle.md)

绑定监听函数

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `K` | 监听类型名 |
| `callback` | [`IObservableCallback`](../README.md#iobservablecallback)<`T`[`K`], `K`, [`Observable`](Observable.md)<`T`\>, `void`\> | 监听回调函数 |

#### Returns

[`IObservableHandle`](../interfaces/IObservableHandle.md)

#### Defined in

[observable.ts:53](https://github.com/xizher/nhz-utils/blob/8d62316/src/watch/observable.ts#L53)

___

### once

▸ **once**<`K`\>(`name`, `callback`): `void`

绑定监听函数（仅监听一次）

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `K` | 监听类型名 |
| `callback` | [`IObservableCallback`](../README.md#iobservablecallback)<`T`[`K`], `K`, [`Observable`](Observable.md)<`T`\>, `void`\> | 监听回调函数 |

#### Returns

`void`

#### Defined in

[observable.ts:131](https://github.com/xizher/nhz-utils/blob/8d62316/src/watch/observable.ts#L131)
