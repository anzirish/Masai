"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    name;
    age;
    rollNo;
    constructor(name, age, rollNo) {
        this.name = name;
        this.age = age;
        this.rollNo = rollNo;
    }
    displayDetails = () => {
        console.log(`Student: ${this.name}, Age: ${this.age}, Roll No: ${this.rollNo}`);
    };
}
const student1 = new Student("tanishq", 20, 21);
const student2 = new Student("Doearmon", 21, 20);
student1.displayDetails();
student2.displayDetails();
//# sourceMappingURL=index.js.map