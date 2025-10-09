const express = require("express");
const connectToDB = require("./config/db.js");
const router = require("./routes/index.route.js");
require("dotenv").config()

const app = express();

connectToDB();

app.use(express.json());

app.use("/", router);

app.use((req, res) => {
  res.json({ error: "Invalid route" });
});

app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message });
});

app.listen(process.env.PORT, (req, res)=>{
  console.log("Listening....")
})