const Profile = require("../models/profile.model.js");
const User = require("../models/user.model.js");

const addProfile = async (req, res) => {
  try {
    const { user } = req.body;
    const isExists = await User.findById(user);
    if (!isExists)
      return res.status(404).json({ error: "User not found with this id" });

    const existingProfile = await Profile.findOne({ user });
    if (existingProfile)
      return res.status(400).json({ error: "Profile already exists for this user" });
    const profile = new Profile(req.body);
    await profile.save();
    res.status(201).json({ "profile created": profile });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = addProfile