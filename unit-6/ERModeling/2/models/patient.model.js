const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
  name: { type: String, required : [true, "Patient name is must"] },
  age: { type: Number },
  gender: { type: String, enum: ["Male", "Female"] },
  isActive: { type: Boolean, default: true },
});

const Patient = mongoose.model("Patient", patientSchema);

module.exports = Patient