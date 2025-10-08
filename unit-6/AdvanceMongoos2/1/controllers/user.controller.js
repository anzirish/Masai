const User = require("../models/user.model.js");

const addUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json({ "user created": user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = addUser;
