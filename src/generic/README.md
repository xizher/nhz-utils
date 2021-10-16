generic

# generic

## Table of contents

### Type aliases

- [Arrayable](README.md#arrayable)
- [Concrete](README.md#concrete)
- [IsomorphicDestructurable](README.md#isomorphicdestructurable)
- [NonArray](README.md#nonarray)
- [Nullable](README.md#nullable)
- [Optional](README.md#optional)
- [ReturnPromiseType](README.md#returnpromisetype)

## Type aliases

### Arrayable

Ƭ **Arrayable**<`T`\>: `T` \| `T`[]

Array, or not yet

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[generic.ts:79](https://github.com/xizher/nhz-utils/blob/4645c67/src/generic/generic.ts#L79)

___

### Concrete

Ƭ **Concrete**<`Type`\>: { [Property in keyof Type]-?: Type[Property] extends object ? Concrete<Type[Property]\> : Type[Property] }

成员具体化

**`example\`**
Concrete<{       // => {
a?: number     // =>   a: number
b?: string     // =>   b: string
c? () : void   // =>   c () : void
d?: {          // =>   d: {
e?: boolean  // =>     e: boolean
}              // =>   }
}>               // => }

#### Type parameters

| Name |
| :------ |
| `Type` |

#### Defined in

[generic.ts:15](https://github.com/xizher/nhz-utils/blob/4645c67/src/generic/generic.ts#L15)

___

### IsomorphicDestructurable

Ƭ **IsomorphicDestructurable**<`T`, `A`\>: `T` & `A`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Record`<`string`, `unknown`\> |
| `A` | extends readonly `any`[] |

#### Defined in

[generic.ts:61](https://github.com/xizher/nhz-utils/blob/4645c67/src/generic/generic.ts#L61)

___

### NonArray

Ƭ **NonArray**<`T`\>: `T` extends `unknown`[] ? `T`[``0``] : `T`

非数组类型

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[generic.ts:69](https://github.com/xizher/nhz-utils/blob/4645c67/src/generic/generic.ts#L69)

___

### Nullable

Ƭ **Nullable**<`T`\>: `T` \| ``null`` \| `undefined`

Null or whatever

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[generic.ts:74](https://github.com/xizher/nhz-utils/blob/4645c67/src/generic/generic.ts#L74)

___

### Optional

Ƭ **Optional**<`Type`\>: { [Property in keyof Type]?: Type[Property] extends object ? Optional<Type[Property]\> : Type[Property] }

成员可选化

**`example`**
Concrete<{       // => {
a: number      // =>   a?: number
b: string      // =>   b?: string
c () : void    // =>   c? () : void
d: {           // =>   d?: {
e: boolean   // =>     e?: boolean
}              // =>   }
}>               // => }

#### Type parameters

| Name |
| :------ |
| `Type` |

#### Defined in

[generic.ts:34](https://github.com/xizher/nhz-utils/blob/4645c67/src/generic/generic.ts#L34)

___

### ReturnPromiseType

Ƭ **ReturnPromiseType**<`Type`\>: `Type` extends (...`args`: `any`[]) => `Promise`<infer Return\> ? `Return` : `ReturnType`<`Type`\>

函数的返回类型，函数返回Promise则获取Promise的Resolve返回对象

**`example`**
function test (b: string) : number {
return 1
}
async function test2 (a: number) : Promise<number> {
return 1
}

let t : ReturnType<typeof test> // number
let t2 : ReturnType<typeof test2> // Promise<number>
let t3 : ReturnPromiseType<typeof test> // number
let t4 : ReturnPromiseType<typeof test2> // number

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Type` | extends (...`args`: `any`[]) => `any` |

#### Defined in

[generic.ts:55](https://github.com/xizher/nhz-utils/blob/4645c67/src/generic/generic.ts#L55)
