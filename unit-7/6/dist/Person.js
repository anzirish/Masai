"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hi ${this.name} you are ${this.age} years old`);
    }
    isAdult() {
        console.log(`Is ${this.name} an adult? ${this.age >= 18}`);
    }
}
const person = new Person("tanishq", 20);
person.greet();
person.isAdult();
//# sourceMappingURL=Person.js.map