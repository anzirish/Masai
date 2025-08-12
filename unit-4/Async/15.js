function task1() {
  console.log("Task 1 completed");
}

function taskTwo(callback) {
  console.log("Task 2 completed");
  callback();
}

taskTwo(task1);
