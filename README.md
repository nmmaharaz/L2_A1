# 🔑 What is the use of the keyof keyword in TypeScript? Provide an example.
## 📘 Introduction
The keyof keyword in TypeScript is used to extract the keys of a type as a union of string literal types.
This allows for type-safe access to object properties and is especially useful when working with generics or when you need to ensure that a given key actually exists on a specific type.


## 💡 Example

```ts
// 1️⃣ Define an interface
interface Student {
  student_name: string;
  roll: number;
  course: string;
}

// 2️⃣ Extract keys using 'keyof'
type StudentKeys = keyof Student; // "student_name" | "roll" | "course"

// 3️⃣ Generic type-safe function to access object properties
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

// 4️⃣ Example usage
const student: Student = {
  student_name: "NM Meheraj",
  roll: 03,
  course: "Next Level Web Development"
};

const studentName = getProperty(student, "student_name"); // string
const studentAge = getProperty(student, "roll");   // number
const studentCity = getProperty(student, "course"); // string

// ❌ This line will cause a compile-time error:
// const invalidKey = getProperty(student, "invalid"); 
// Error: Argument of type '"invalid"' is not assignable to parameter of type 'keyof Student'
```

</br>

# 🧠 Explain the difference between any, unknown, and never types in TypeScript.

In TypeScript, any, unknown, and never are special types, each with distinct purposes and behaviors. Understanding their differences is essential for writing safe and maintainable code.



## `any`

The any type disables type checking altogether. It tells the TypeScript compiler to skip type checking for that variable, allowing any kind of operation without validation.

```ts
let studentName: any = "Meheraj";
studentName = 123;            // OK
studentName = "123";          // OK
studentName = true;           // OK
```
- Use case: When you're dealing with third-party libraries or migrating JavaScript code and type safety is temporarily not a priority.

- Caution: Overusing any removes the benefits of TypeScript's type system and may lead to runtime bugs.

## `unknown`

The unknown type is safer than any. It also allows any value, but unlike any, you cannot perform operations on it without first narrowing its type or using a type assertion.

```ts
let unknownVar: unknown = "Meheraj";
unknownVar = 456; // OK

// unknownVar.toUpperCase(); // ❌ Error

if (typeof unknownVar === 'string') {
    unknownVar.toUpperCase(); // ✅ OK, type is narrowed to 'string'
}
```
- Use case: When you're receiving a value from an uncertain source (e.g., user input or external API) and want to enforce type safety before using it.

- Benefit: Helps prevent unintended operations by requiring proper type checks.

## `never`

The never type represents values that never occur. It's commonly used as the return type of functions that throw errors or run infinitely, meaning they never return.

```ts
function throwError(message: string): never {
    throw new Error(message);
}

function infiniteLoop(): never {
    while (true) {}
}
```
- Use case: Functions that should not return a value or represent impossible code paths (e.g., exhaustive checks in switch statements).

- Benefit: Helps catch unreachable or incorrect logic in your code.