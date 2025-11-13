"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    walk() {
        console.log("Walking...");
    }
}
class Developer extends Person {
    code() {
        console.log("Coding...");
    }
}
const dev = new Developer();
dev.walk();
dev.code();
//# sourceMappingURL=index.js.map