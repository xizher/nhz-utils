/**
 * 成员具体化
 * @example\
Concrete<{       // => {
  a?: number     // =>   a: number
  b?: string     // =>   b: string
  c? () : void   // =>   c () : void
  d?: {          // =>   d: {
    e?: boolean  // =>     e: boolean
  }              // =>   }
}>               // => }
 */
declare type Concrete<Type> = {
    [Property in keyof Type]-?: Type[Property] extends object ? Concrete<Type[Property]> : Type[Property];
};
/**
 * 成员可选化
 * @example
Concrete<{       // => {
  a: number      // =>   a?: number
  b: string      // =>   b?: string
  c () : void    // =>   c? () : void
  d: {           // =>   d?: {
    e: boolean   // =>     e?: boolean
  }              // =>   }
}>               // => }
 */
declare type Optional<Type> = {
    [Property in keyof Type]?: Type[Property] extends object ? Optional<Type[Property]> : Type[Property];
};
/**
 * 函数的返回类型，函数返回Promise则获取Promise的Resolve返回对象
 * @example
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
 */
declare type ReturnPromiseType<Type extends (...args: any[]) => any> = Type extends (...args: any[]) => Promise<infer Return> ? Return : ReturnType<Type>;
declare type IsomorphicDestructurable<T extends Record<string, unknown>, A extends readonly any[]> = T & A;
/**
 * 非数组类型
 */
declare type NonArray<T> = T extends Array<unknown> ? T[0] : T;
/**
 * Null or whatever
 */
declare type Nullable<T> = T | null | undefined;
/**
 * Array, or not yet
 */
declare type Arrayable<T> = T | Array<T>;
/**
 * Function
 */
declare type Fn<T = void> = () => T;

export { Arrayable, Concrete, Fn, IsomorphicDestructurable, NonArray, Nullable, Optional, ReturnPromiseType };
