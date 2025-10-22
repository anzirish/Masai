const mongoose = require("mongoose");

const learnerSchema = new mongoose.Schema({
  name: { type: String, required: [true, "Learner name is must"] },
  email: { type: String, required: [true, "Learner email input is must"] },
  isActive: { type: Boolean, default: true },
});

const Learner = mongoose.model("Learner", learnerSchema);

module.exports = Learner