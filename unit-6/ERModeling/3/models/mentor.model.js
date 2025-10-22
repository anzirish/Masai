const mongoose = require("mongoose");

const mentorSchema = new mongoose.Schema({
  name: { type: String, required: [true, "Mentor name is must"] },
  domain: { type: String, required: [true, "Mentor domain input is must"] },
  isActive: { type: Boolean, default: true },
});

const Mentor = mongoose.model("Mentor", mentorSchema);

module.exports = Mentor;
