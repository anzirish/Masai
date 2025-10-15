const EvenEmitter = require("events");
const emitter = new EvenEmitter();

emitter.on("userLoggedIn", (username) => {
  console.log(`${username} logged in`);
  console.log(`Notification sent to ${username}`);
});

emitter.on("dataSync", (username) => {
  console.log(`Daata sync complerte for ${username}`);
});

emitter.on("messageReceived", (username, msg) => {
  console.log(`New message for ${username} : ${msg}`);
});

const scheduleAsync = (username) => {
  setTimeout(() => {
    emitter.emit("userLoggedIn", username);
    setTimeout(() => {
      emitter.emit("messageReceived", username, "You may have a new message");
    }, 3000);
    setTimeout(() => {
      emitter.emit("dataSync", username);
    }, 5000);
  }, 2000);
};

scheduleAsync("Galadriel");
