const mongoose = require("mongoose");

const enrollmentSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
    required: true,
  },
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
    required: true,
  },
  enrolledAt: { type: Date, default: Date.now },
  isActive: { type: Boolean, default: true },
}, {timestamps : true});

const Enrollment = mongoose.model("Enrollment", enrollmentSchema);

module.exports = Enrollment;
