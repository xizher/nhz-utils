is

# is

## Table of contents

### Functions

- [isBoolean](README.md#isboolean)
- [isFunction](README.md#isfunction)
- [isNullable](README.md#isnullable)
- [isNumber](README.md#isnumber)
- [isObject](README.md#isobject)
- [isPromise](README.md#ispromise)
- [isString](README.md#isstring)

## Functions

### isBoolean

▸ `Const` **isBoolean**(`val`): val is boolean

判断变量是否为 boolean 类型

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `unknown` | 变量 |

#### Returns

val is boolean

#### Defined in

[is.ts:11](https://github.com/xizher/nhz-utils/blob/af84f98/src/is/is.ts#L11)

___

### isFunction

▸ `Const` **isFunction**<`T`\>(`val`): val is T

判断变量是否为 function 类型

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Function` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `unknown` | 变量 |

#### Returns

val is T

#### Defined in

[is.ts:18](https://github.com/xizher/nhz-utils/blob/af84f98/src/is/is.ts#L18)

___

### isNullable

▸ `Const` **isNullable**(`val`): val is undefined \| null

判断变量是否为 null 或者 undefined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `unknown` | 变量 |

#### Returns

val is undefined \| null

#### Defined in

[is.ts:36](https://github.com/xizher/nhz-utils/blob/af84f98/src/is/is.ts#L36)

___

### isNumber

▸ `Const` **isNumber**(`val`): val is number

判断变量是否为 number 类型

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `unknown` | 变量 |

#### Returns

val is number

#### Defined in

[is.ts:24](https://github.com/xizher/nhz-utils/blob/af84f98/src/is/is.ts#L24)

___

### isObject

▸ `Const` **isObject**(`val`): val is object

判断变量是否为 object 类型

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `unknown` | 变量 |

#### Returns

val is object

#### Defined in

[is.ts:5](https://github.com/xizher/nhz-utils/blob/af84f98/src/is/is.ts#L5)

___

### isPromise

▸ `Const` **isPromise**(`val`): val is Promise<unknown\>

判断变量是否为 Promise 类型

**`example`**
```ts
toString.call(val) === '[object Promise]'
!!val && (typeof val === 'object' || typeof val === 'function') && typeof val.then === 'function'
val instanceof Promise // <-
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `unknown` | 变量 |

#### Returns

val is Promise<unknown\>

#### Defined in

[is.ts:50](https://github.com/xizher/nhz-utils/blob/af84f98/src/is/is.ts#L50)

___

### isString

▸ `Const` **isString**(`val`): val is string

判断变量是否为 string 类型

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `unknown` | 变量 |

#### Returns

val is string

#### Defined in

[is.ts:30](https://github.com/xizher/nhz-utils/blob/af84f98/src/is/is.ts#L30)
