const mongoose = require("mongoose");

const sessionSchema = new mongoose.Schema({
  topic: { type: String, required: [true, "Session topic is must"] },
  time: {
    type: Date,
    required: [true, "Session scheduled time input is missing"],
  },
  notes: { type: String },
  mentorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Mentor",
    required: [true, "Mentor id is not provided"],
  },
  learners: [
    {
      learnerId: { type: mongoose.Schema.Types.ObjectId, ref: "Learner" },
      attendance: { type: Boolean, default: true },
      feedaback: { type: String, default: "Nice session!" },
    },
  ],
  isActive: { type: Boolean, default: true },
  isArchieved: { type: Boolean, default: false },
});

const Session = mongoose.model("Session", sessionSchema);
module.exports = Session;
