function Person(name, age) {
  (this.name = name), (this.age = age);
}

Person.prototype.introduce = function () {
  console.log(`Hi my name is ${this.name} and I am ${this.age} years old.`);
};

function Employee(name, age, jobTitle) {
  Person.call(this, name, age);
  this.jobTitle = jobTitle;
}

Employee.prototype = Object.create(Person.prototype);

Employee.prototype.constructor = Employee;

Employee.prototype.work = function () {
  console.log(`${this.name} working as an ${this.jobTitle}`);
};

let person = new Person("Tanishq", 20);
let employee = new Employee("Priya", 21, "AI Engineer");
person.introduce();
employee.introduce();
employee.work();
