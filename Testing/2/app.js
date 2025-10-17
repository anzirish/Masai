import express from "express";
import { taskRouter } from "./routes/task.routes.js";
import { connectDB } from "./config/db.js";
import cors from "cors"

const app = express();

app.use(express.json());
app.use(cors())

connectDB();

app.use("/tasks", taskRouter);

const PORT = 3000;

app.listen(PORT, (req, res) => {
  console.log("listening...");
});
