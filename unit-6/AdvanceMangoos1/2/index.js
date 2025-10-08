import express from "express";
import { router } from "./routes/user.routes.js";
import { connectToDb } from "./config/db.js";

const app = express();
connectToDb();
app.use(express.json());


app.use("/users", router);
const PORT = 3000;

app.all(/.*/, (req, res) => {
  res.status(404).json({ error: "Invalid route" });
});


app.listen(PORT, (req, res) => {
  console.log("listening...");
});
