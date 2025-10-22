const dotenv = require("dotenv");
const express = require("express");
const connectToDB = require("./config/db.js");
const authRouter = require("./routes/auth.routes.js");
const noteRouter = require("./routes/note.routes.js");
const { authMiddleware } = require("./middlewares/auth.middleware.js");

const app = express();
dotenv.config();

connectToDB();

app.use(express.json());
app.use("/auth", authRouter);
app.use("/notes", authMiddleware, noteRouter);

app.use((req, res) => {
  res.json({ error: "Invalid route" });
});

app.listen(process.env.PORT, (req, res) => {
  console.log("listening...");
});
