import express from "express";
import { router } from "./usersRouter.js";
import { connectToDB } from "./config.js";

const app = express();

app.use(express.json());
connectToDB();

app.use("/users", router);
const PORT = 3000;

app.all(/.*/, (req, res) => {
  res.status(404).json({ error: "Invalid route" });
});


app.listen(PORT, (req, res) => {
  console.log("listening...");
});
