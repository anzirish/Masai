import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { authRouter } from "./routes/auth.js";
import { todoRouter } from "./routes/todos.js";
import { verifyToken } from "./middleware/auth.js";

dotenv.config();

export const app = express();
app.use(express.json());

app.get("/test", (req, res) => res.status(200).json({ message: "Server working!" }));

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/todos", verifyToken, todoRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Invalid route" });
});
