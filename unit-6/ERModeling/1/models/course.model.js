const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  title: { type: String, required: [true, "Course title is required"] },
  description: { type: String },
  isActive: { type: Boolean, default: true },
});

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
