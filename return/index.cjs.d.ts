declare function makeDestructurable<T extends Record<string, unknown>, A extends readonly unknown[]>(obj: T, arr: A): T & A;

export { makeDestructurable };
