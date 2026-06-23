## 1. TypeScript Fundamentals

Learn:

- What TypeScript is and why it is used
- Installing TypeScript
- Compiling TypeScript to JavaScript
- Basic Types:
```
string
number
boolean
null
undefined
any
unknown
void
```

Example:
```
    let name: string = "Saravanan";
    let age: number = 25;
```

## 2. Functions

Learn:

- Function type annotations
- Optional parameters
- Default parameters
- Rest parameters
```
    function greet(name: string): string {
        return `Hello ${name}`;
    }
```
## 3. Arrays and Objects
let skills: string[] = ["JS", "TS"];

let user: {
  name: string;
  age: number;
} = {
  name: "John",
  age: 30
};
## 4. Interfaces

- Interfaces are heavily used in React, Angular, and Node.js.
```
interface User {
  id: number;
  name: string;
}
```

## 5. Type Aliases
- type Status = "success" | "error";

Learn:
```
Union Types (|)
Intersection Types (&)
```

## 6. Enums
```
enum Role {
  Admin,
  User,
  Guest
}
```
## 7. Classes and OOP

Learn:

- Classes
- Constructors
- Access Modifiers
- public
- private
- protected
- Inheritance
```
class Person {
  constructor(public name: string) {}
}
```
## 8. Generics

- One of the most important TypeScript concepts.
```
    function identity<T>(value: T): T {
        return value;
    }
```
## 9. Advanced Types

Learn:

- Type Guards
- keyof
- typeof
- Mapped Types
- Conditional Types
- Utility Types:
- Partial
- Pick
- Omit
- Record
## 10. Modules

Learn:

- export
- import
- default export