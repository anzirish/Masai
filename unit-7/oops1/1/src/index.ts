class Student {
  name: string;
  age: number;
  rollNo: number;

  constructor(name: string, age: number, rollNo: number) {
    this.name = name;
    this.age = age;
    this.rollNo = rollNo;
  }

  displayDetails = (): void => {
    console.log(
      `Student: ${this.name}, Age: ${this.age}, Roll No: ${this.rollNo}`
    );
  };
}

const student1 = new Student("tanishq", 20, 21);
const student2 = new Student("Doearmon", 21, 20);

student1.displayDetails();
student2.displayDetails();
