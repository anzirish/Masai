require("dotenv").config();
const express = require("express");
const connectToDB = require("./config/db.js");
const doctorRouter = require("./routes/doctor.routes.js");
const patientRouter = require("./routes/patient.routes.js");
const consultationRouter = require("./routes/consultation.routes.js");

const app = express();

connectToDB();

app.use(express.json());
app.use("/doctors", doctorRouter);
app.use("/patients", patientRouter);
app.use("/consultations", consultationRouter);

app.use((req, res) => {
  res.json({ error: "Invalid route" });
});

app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message });
});

app.listen(process.env.PORT, (req, res) => {
  console.log("listening...");
});
