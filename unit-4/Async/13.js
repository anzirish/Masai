let secondInterval = 0;

let id = setInterval(() => {
  console.log("Loding...");
  secondInterval++;
  if (secondInterval == 5) {
    console.log("Loaded successfully");
    clearInterval(id);
  }
}, 1000);
