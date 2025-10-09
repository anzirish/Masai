const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  name: { type: String , required : [true, "Doctor name is must"]},
  specialization: { type: String },
  isActive: { type: Boolean, default: true },
});

const Doctor = mongoose.model("Doctor", doctorSchema);

module.exports = Doctor