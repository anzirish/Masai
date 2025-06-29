function manageStudents() {
  let students = ["Alice", "Bob", "Charlie"];

  addNewStudent("David", 1);
  console.log(checkStudent("Eve"));
  console.log(convert());

  function addNewStudent(student, position) {
    if (position >= students.length) {
      return "Index out of bound";
    }
    students.splice(position, 0, student);
  }

  function checkStudent(name = "") {
    return students.includes(name);
  }

  function convert() {
    return students.join(",");
  }
}

manageStudents();
