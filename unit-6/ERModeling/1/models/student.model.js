const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: { type: String, required: [true, "Student name is required"] },
  email: { type: String, required: [true, "Studnet email is required"] },
  isActive: { type: Boolean, default: true },
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
