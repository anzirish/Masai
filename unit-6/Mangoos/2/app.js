import express from "express";
import { taskRouter } from "./routes/task.routes.js";
import { connectDB } from "./config/db.js";

const app = express();

app.use(express.json());

connectDB();

app.use("/tasks", taskRouter);

const PORT = 3000;

app.listen(PORT, (req, res) => {
  console.log("listening...");
});
