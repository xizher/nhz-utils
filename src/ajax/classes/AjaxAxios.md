[ajax](../README.md) / AjaxAxios

# Class: AjaxAxios

## Table of contents

### Constructors

- [constructor](AjaxAxios.md#constructor)

### Properties

- [\_axiosInstance](AjaxAxios.md#_axiosinstance)
- [\_config](AjaxAxios.md#_config)
- [\_data](AjaxAxios.md#_data)
- [\_header](AjaxAxios.md#_header)
- [\_params](AjaxAxios.md#_params)
- [\_url](AjaxAxios.md#_url)
- [\_defaultAxiosInstance](AjaxAxios.md#_defaultaxiosinstance)

### Methods

- [mountGet](AjaxAxios.md#mountget)
- [mountPost](AjaxAxios.md#mountpost)
- [setConfig](AjaxAxios.md#setconfig)
- [setData](AjaxAxios.md#setdata)
- [setHeader](AjaxAxios.md#setheader)
- [setParams](AjaxAxios.md#setparams)
- [setUrl](AjaxAxios.md#seturl)
- [setDefaultAxiosInstance](AjaxAxios.md#setdefaultaxiosinstance)

## Constructors

### constructor

• **new AjaxAxios**(`axiosInstance?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `axiosInstance?` | `AxiosInstance` |

#### Defined in

[ajax.ts:24](https://github.com/xizher/nhz-utils/blob/55c3ef3/src/ajax/ajax.ts#L24)

## Properties

### \_axiosInstance

• `Private` **\_axiosInstance**: `AxiosInstance`

#### Defined in

[ajax.ts:12](https://github.com/xizher/nhz-utils/blob/55c3ef3/src/ajax/ajax.ts#L12)

___

### \_config

• `Private` **\_config**: `AxiosRequestConfig`<`any`\>

#### Defined in

[ajax.ts:22](https://github.com/xizher/nhz-utils/blob/55c3ef3/src/ajax/ajax.ts#L22)

___

### \_data

• `Private` **\_data**: `object`

#### Defined in

[ajax.ts:16](https://github.com/xizher/nhz-utils/blob/55c3ef3/src/ajax/ajax.ts#L16)

___

### \_header

• `Private` **\_header**: `AxiosRequestHeaders`

#### Defined in

[ajax.ts:20](https://github.com/xizher/nhz-utils/blob/55c3ef3/src/ajax/ajax.ts#L20)

___

### \_params

• `Private` **\_params**: `object`

#### Defined in

[ajax.ts:18](https://github.com/xizher/nhz-utils/blob/55c3ef3/src/ajax/ajax.ts#L18)

___

### \_url

• `Private` **\_url**: `string`

#### Defined in

[ajax.ts:14](https://github.com/xizher/nhz-utils/blob/55c3ef3/src/ajax/ajax.ts#L14)

___

### \_defaultAxiosInstance

▪ `Static` `Private` **\_defaultAxiosInstance**: `AxiosInstance`

#### Defined in

[ajax.ts:6](https://github.com/xizher/nhz-utils/blob/55c3ef3/src/ajax/ajax.ts#L6)

## Methods

### mountGet

▸ **mountGet**<`T`\>(): `Promise`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

`Promise`<`T`\>

#### Defined in

[ajax.ts:28](https://github.com/xizher/nhz-utils/blob/55c3ef3/src/ajax/ajax.ts#L28)

___

### mountPost

▸ **mountPost**<`T`\>(): `Promise`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

`Promise`<`T`\>

#### Defined in

[ajax.ts:38](https://github.com/xizher/nhz-utils/blob/55c3ef3/src/ajax/ajax.ts#L38)

___

### setConfig

▸ **setConfig**(`config`): [`AjaxAxios`](AjaxAxios.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `AxiosRequestConfig`<`any`\> |

#### Returns

[`AjaxAxios`](AjaxAxios.md)

#### Defined in

[ajax.ts:67](https://github.com/xizher/nhz-utils/blob/55c3ef3/src/ajax/ajax.ts#L67)

___

### setData

▸ **setData**(`data`): [`AjaxAxios`](AjaxAxios.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `object` |

#### Returns

[`AjaxAxios`](AjaxAxios.md)

#### Defined in

[ajax.ts:52](https://github.com/xizher/nhz-utils/blob/55c3ef3/src/ajax/ajax.ts#L52)

___

### setHeader

▸ **setHeader**(`header`): [`AjaxAxios`](AjaxAxios.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `header` | `AxiosRequestHeaders` |

#### Returns

[`AjaxAxios`](AjaxAxios.md)

#### Defined in

[ajax.ts:62](https://github.com/xizher/nhz-utils/blob/55c3ef3/src/ajax/ajax.ts#L62)

___

### setParams

▸ **setParams**(`params`): [`AjaxAxios`](AjaxAxios.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `object` |

#### Returns

[`AjaxAxios`](AjaxAxios.md)

#### Defined in

[ajax.ts:57](https://github.com/xizher/nhz-utils/blob/55c3ef3/src/ajax/ajax.ts#L57)

___

### setUrl

▸ **setUrl**(`url`): [`AjaxAxios`](AjaxAxios.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Returns

[`AjaxAxios`](AjaxAxios.md)

#### Defined in

[ajax.ts:47](https://github.com/xizher/nhz-utils/blob/55c3ef3/src/ajax/ajax.ts#L47)

___

### setDefaultAxiosInstance

▸ `Static` `Private` **setDefaultAxiosInstance**(`instance`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `instance` | `AxiosInstance` |

#### Returns

`void`

#### Defined in

[ajax.ts:8](https://github.com/xizher/nhz-utils/blob/55c3ef3/src/ajax/ajax.ts#L8)
