import express from "express";
import { connectDB } from "../../Mangoos/2/config/db.js";
import { router } from "./routes/user.routes.js";

const app = express();

app.use(express.json());
connectDB();

app.use("/users", router);
const PORT = 3000;

app.all(/.*/, (req, res) => {
  res.status(404).json({ error: "Invalid route" });
});


app.listen(PORT, (req, res) => {
  console.log("listening...");
});
