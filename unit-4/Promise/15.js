function startTask() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Task A completed");
    }, 1000);
  });
}

function processTask(message) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Task B procesed : ${message}`);
    }, 1500);
  });
}

function finalizeTask(message) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Final result : ${message}`);
    }, 500);
  });
}

startTask()
  .then((message) => {
    console.log(message);
    return processTask(message);
  })
  .then((message) => {
    console.log(message);
    return finalizeTask(message);
  })
  .then(console.log)
  .catch((error) => {
    console.log(error);
  });
