import EventEmitter from "events";

const eventEmitter = new EventEmitter();

eventEmitter.on("log", (message) => {
  const imtestampt = new Date().toISOString();
  console.log(`[${imtestampt}] ${message}`);
});

export default eventEmitter;
