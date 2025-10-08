const express = require("express");
const connectToDB = require("./config/db.js");
const router = require("./routes/router.js");

const app = express();

connectToDB();

app.use(express.json());
app.use("/", router);

app.use((req, res) => {
  res.json({ error: "invalid route" });
});

const PORT = 3000;

app.listen(PORT, (req, res) => {
  console.log("Listening...");
});
