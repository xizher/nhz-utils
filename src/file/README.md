file

# file

## Table of contents

### Functions

- [readFileAsJSON](README.md#readfileasjson)
- [readFileAsText](README.md#readfileastext)

## Functions

### readFileAsJSON

▸ **readFileAsJSON**<`T`\>(`file`, `encoding?`): `Promise`<`T`\>

读取文件内容并转为JSON对象

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `file` | `File` | 文件 |
| `encoding?` | `string` | 编码 |

#### Returns

`Promise`<`T`\>

#### Defined in

[file.ts:24](https://github.com/xizher/nhz-utils/blob/f583067/src/file/file.ts#L24)

___

### readFileAsText

▸ **readFileAsText**(`file`, `encoding?`): `Promise`<`string`\>

读取文件内容

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `file` | `File` | 文件 |
| `encoding?` | `string` | 编码 |

#### Returns

`Promise`<`string`\>

#### Defined in

[file.ts:6](https://github.com/xizher/nhz-utils/blob/f583067/src/file/file.ts#L6)
