import express from "express";
import eventEmitter from "./eventLogger.js";
import { delayMessage } from "./delay.js";

const app = express();
const port = 3000;

app.get("/test", (req, res) => {
  res.json("working..");
});

app.get("/emit", (req, res) => {
  const { message } = req.query;
  if (!message) return;
  eventEmitter.emit("log", message);
  res.json({
    status: "Event logged",
    timestamp: new Date().toISOString(),
  });
});

app.get("/delay", async (req, res) => {
  const { message, time } = req.query;
  if (message && time) {
    const result = await delayMessage(message, time);
    res.json({
      status: "success",
      message: result,
    });
  }
});

app.listen(port, () => {
  console.log("listening...");
});
