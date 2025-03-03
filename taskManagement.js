let tasks = [["task1", 2], ["task2", 5], ["task3", 6], ["task4", 7], ["task5", 8]]

let newTask = ["task6", 99]
let newTask2 = ["task8", 100]

tasks.shift() // remove first task

// adding 2 new high prio tasks
tasks.unshift(newTask)
tasks.unshift(newTask2)

console.log(tasks);

[tasks[0], tasks[tasks.length-1]] = [tasks[tasks.length-1], tasks[0]] // replacinf first task with last

console.log(tasks)



