import express from "express";
import { ticketsRouter } from "./routes/ticketsRoutes.js";

const app = express();

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/tickets", ticketsRouter);

app.use((req, res) => {
  res.status(404).json({ error: "404 not found" });
});

app.listen(PORT, () => {
  console.log("listening.....");
});
