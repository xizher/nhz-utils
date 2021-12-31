url

# url

## Table of contents

### Functions

- [createJSONUrl](README.md#createjsonurl)
- [createUrlFromBlob](README.md#createurlfromblob)
- [loadCss](README.md#loadcss)
- [loadJs](README.md#loadjs)

## Functions

### createJSONUrl

▸ **createJSONUrl**(`json`): { `destory`: () => `void` ; `url`: `string`  } & readonly [`string`, () => `void`]

创建缓存地址

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `json` | `object` | JSON |

#### Returns

{ `destory`: () => `void` ; `url`: `string`  } & readonly [`string`, () => `void`]

#### Defined in

[url.ts:66](https://github.com/xizher/nhz-utils/blob/042334f/src/url/url.ts#L66)

___

### createUrlFromBlob

▸ **createUrlFromBlob**(`blobPart`, `options?`): { `destory`: () => `void` ; `url`: `string`  } & readonly [`string`, () => `void`]

创建缓存路径

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `blobPart` | `BlobPart` | Blob |
| `options?` | `BlobPropertyBag` | 配置项 |

#### Returns

{ `destory`: () => `void` ; `url`: `string`  } & readonly [`string`, () => `void`]

#### Defined in

[url.ts:53](https://github.com/xizher/nhz-utils/blob/042334f/src/url/url.ts#L53)

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

[url.ts:8](https://github.com/xizher/nhz-utils/blob/042334f/src/url/url.ts#L8)

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

[url.ts:32](https://github.com/xizher/nhz-utils/blob/042334f/src/url/url.ts#L32)
