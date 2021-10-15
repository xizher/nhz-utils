declare class ArrayExtension<T = any> {
    private static _instance;
    private _target;
    get $(): T[];
    get last(): T;
    constructor(target: T[]);
    insert(index: number, value: T): this;
    removeIndex(index: number): this;
    removeIndex(index: number, returnRemoveItem?: true): T;
    clear(): this;
    reset(...items: T[]): this;
    removeValue(value: T, removeMany?: boolean): this;
    unique(): this;
    getUnique(): T[];
    equal<K>(anotherArr: K[]): boolean;
    findItem(propName: keyof T, propValue: T[keyof T]): T | undefined;
    findItems(propName: keyof T, propValue: T[keyof T]): T[];
    propToArr(prop: keyof T): T[keyof T][];
}
declare function arr<T>(target: T[]): ArrayExtension<T>;

export { arr };
