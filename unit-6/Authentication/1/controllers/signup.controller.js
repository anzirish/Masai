const User = require("../models/user.model.js");
const bcrypt = require("bcrypt");

const signup = async (req, res, next) => {
  const { name, email, password } = req.body;
  if (!name | !email | !password)
    return res.status(401).json({ error: "Invalid input for sign up" });
  const userExists = await User.findOne({ email });
  if (userExists) 
    return res.status(400).json({ message: "User already exists"});

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({ name, email, password: hashedPassword });
  res.status(200).json({ msg: "success", user });
};

module.exports = { signup };
