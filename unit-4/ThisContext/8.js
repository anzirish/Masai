function personInfo() {
  console.log(`The name is ${person.name} and age is ${person.age}`);
}

let person = {
  name: "Tanishq",
  age: 20,
};

personInfo.call(person);