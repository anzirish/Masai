const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  bio: { type: String },
  socialMediaLinks: { type: [String], default: [] },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", unique: true },
});

const Profile = mongoose.model("profile", profileSchema);

module.exports = Profile;
