import express from "express";
import { configDotenv } from "dotenv";
import { connectToDb } from "./config/db.js";
import authRouter from "./routes/auth.routes.js";
import userRouter from "./routes/user.routes.js";
import taskRouter from "./routes/task.routes.js";
import cors from "cors"

configDotenv();
connectToDb();

const app = express();
const port = process.env.PORT;

app.use(cors())
app.use(express.json());
app.use("/auth", authRouter);
app.use("/tasks", taskRouter);
app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.status(200).json({ msg: "Server is running!!!" });
});

app.use((req, res) => res.status(404).json({ error: "Invalid route" }));

app.use((err, req, res, next) => {
  console.error("[Error] ", err.message);
  res
    .status(err.statusCode || 500)
    .json({ error: err.message || "Something went wrong with the server" });
});

if (!port) {
  console.error("PORT not defined in .env");
  process.exit(1);
}

app.listen(port, () => console.log(`server running on port : ${port}`));
