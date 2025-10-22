function processData(students) {
  let filteredStudents = students
    .filter((student) => student.name.toLowerCase().includes("alice"))
    .filter((student) => student.score >= 50)
    .sort((a, b) => b.score - a.score)
    .map((student, index) => ({
      name: student.name.trim().toUpperCase(),
      score: student.score,
      rank: index + 1
    }));

  let totalPassed = filteredStudents.reduce((count, student) => count + 1, 0);

  return {
    totalPassed,
    students: filteredStudents
  };
}

const students = [
  { name: " Alice Cooper ", score: 85 },
  { name: "bob alice", score: 42 },
  { name: "Alice Wonderland", score: 70 },
  { name: " david", score: 30 },
];

const result = processData(students);
console.log(result);
// Output:
// {
//   totalPassed: 2,
//   students: [
//     { name: 'ALICE COOPER', score: 85, rank: 1 },
//     { name: 'ALICE WONDERLAND', score: 70, rank: 2 }
//   ]
// }
