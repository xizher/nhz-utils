url

# url

## Table of contents

### Functions

- [createJSONUrl](README.md#createjsonurl)
- [loadCss](README.md#loadcss)
- [loadJs](README.md#loadjs)

## Functions

### createJSONUrl

▸ **createJSONUrl**(`json`): [`string`, () => `void`]

创建缓存地址

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `json` | `object` | JSON |

#### Returns

[`string`, () => `void`]

#### Defined in

[url.ts:50](https://github.com/xizher/nhz-utils/blob/55c3ef3/src/url/url.ts#L50)

___

### loadCss

▸ **loadCss**(`cssUrl`, `success?`, `error?`): `Promise`<`void`\>

加载css

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cssUrl` | `string` | CSS路径 |
| `success?` | () => `void` | - |
| `error?` | (`err`: `string` \| `Event`) => `void` | - |

#### Returns

`Promise`<`void`\>

#### Defined in

[url.ts:6](https://github.com/xizher/nhz-utils/blob/55c3ef3/src/url/url.ts#L6)

___

### loadJs

▸ **loadJs**(`jsUrl`, `success?`, `error?`): `Promise`<`void`\>

加载js

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `jsUrl` | `string` | JS路径 |
| `success?` | () => `void` | 加载成功完成回调事件 |
| `error?` | (`err`: `string` \| `Event`) => `void` | 加载错误回调事件 |

#### Returns

`Promise`<`void`\>

#### Defined in

[url.ts:30](https://github.com/xizher/nhz-utils/blob/55c3ef3/src/url/url.ts#L30)
