let unknownValue: unknown = "Hello, TypeScript!";
let anyValue: any = "Hello, TypeScript!";

// 1. What will happen if we call `.toUpperCase()` on both values?
console.log(unknownValue.toUpperCase());  // We will get complie time error as we must check the type before any operation on unknown type

console.log(anyValue.toUpperCase());     // As anyValue is string type and uppercse is string function so no error

// 2. 
let myValue: unknown = 100;
console.log(myValue + 1);  // Complie time error
