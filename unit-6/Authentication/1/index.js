
const express = require("express");
const authRouter = require("./routes/auth.route.js");
const connectToDB = require("./config/db.js");

const app = express();

connectToDB();

app.use(express.json());
app.use("/", authRouter);

app.use((req, res) => {
  res.json({ error: "invalid route" });
});

const PORT = 3000;

app.listen(PORT, (req, res) => {
  console.log("Listening...");
});
