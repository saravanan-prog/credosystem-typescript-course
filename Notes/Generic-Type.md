## This is one of the most fundamental concepts in TypeScript: Generics.

```
function identity<T>(value: T): T {
    return value;
}
```


### What is <T>?

- `<T>` is a generic type parameter.
- Think of it as a placeholder for a type.
- Instead of writing separate functions for string, number, boolean, etc., you write one generic function that works for all types.
##### Without Generics
```

function identity(value: string): string {
    return value;
}

identity("Hello"); // ✅
identity(10);      // ❌ Error
```
##### With Generics

```
function identity<T>(value: T): T {
    return value;
}

identity<string>("Hello");
identity<number>(10);
identity<boolean>(true);

```