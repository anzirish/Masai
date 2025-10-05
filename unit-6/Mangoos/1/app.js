import express from "express";
import mongoose from "mongoose";
import { router } from "./TaskRoutes.js";

const app = express();

app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/taskDB")
  .then(() => console.log("Mongo connected"))
  .catch((err) => console.log(`Error while connecting db ${err}`));

app.use("/tasks", router);

app.use((req, res) => {
  res.send("Invalid route");
});

const PORT = 3000;
app.listen(PORT, (req, res) => {
  console.log("listening..");
});
