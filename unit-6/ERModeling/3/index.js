require("dotenv").config();
const express = require("express");
const connectToDB = require("./config/db.js");
const mentorRouter = require("./routes/mentor.routes.js");
const learnerRouter = require("./routes/learner.route.js");
const sessionRouter = require("./routes/session.route.js");

const app = express();

connectToDB();

app.use(express.json());
app.use("/mentors", mentorRouter);
app.use("/learners", learnerRouter);
app.use("/sessions", sessionRouter);

app.use((req, res) => {
  res.json({ error: "Invalid route" });
});

app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message });
});

app.listen(process.env.PORT, (req, res) => {
  console.log("listening...");
});
