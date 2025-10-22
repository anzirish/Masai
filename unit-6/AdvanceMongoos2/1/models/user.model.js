const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, minLength: 3 },
  email: { type: String, required: true, unique: true },
});

const User = mongoose.model("user", userSchema);

module.exports = User;
