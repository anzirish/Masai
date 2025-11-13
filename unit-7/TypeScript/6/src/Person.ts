class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
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
