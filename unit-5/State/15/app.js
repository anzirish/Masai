const { useState } = React;

function Atendance() {
  const studentsList = [
    { id: 1, name: "Alice", present: true },
    { id: 2, name: "Bob", present: false },
    { id: 3, name: "Charlie", present: true },
    { id: 4, name: "David", present: false },
    { id: 5, name: "Eve", present: true },
  ];

  const [students, updateStudents] = useState([...studentsList]);
  const [selected, select] = useState("all");
  const presentStudents = students.filter((student) => student.present);
  const absentStudents = students.filter((student) => !student.present);
  const presentStudentsLength = presentStudents.length;

  const filteredStudents =
    selected === "present"
      ? presentStudents
      : selected === "absent"
      ? absentStudents
      : students;

  const clickHandler = (id) => {
    const newStudentsList = students.map((student) =>
      student.id === id ? { ...student, present: !student.present } : student
    );
    updateStudents(newStudentsList);
  };

  return (
    <div>
      <select value={selected} onChange={(e) => select(e.target.value)}>
        <option value="all">All students</option>
        <option value="present">Present students</option>
        <option value="absent">Absent students</option>
      </select>
      {filteredStudents.map((student, idx) => {
        return (
          <div key={idx}>
            <h2>{student.name}</h2>
            <button className={student.present ? "present" : "absent"}>
              {student.present ? "Present" : "Absent"}
            </button>
            <button onClick={() => clickHandler(student.id)}>
              Update attendance
            </button>
            <hr />
          </div>
        );
      })}
      <p>Present : {presentStudentsLength}</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Atendance />);
