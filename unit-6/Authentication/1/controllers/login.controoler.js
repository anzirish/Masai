const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user.model.js");

const login = async (req, res, next) => {
  const { email, password } = req.body;
  if (!password | !email)
    return res.status(401).json({ error: "Invalid input for sign up" });
  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ msg: "User not found" });

  const passwordMatched = await bcrypt.compare(password, user.password);
  if (!passwordMatched)
    return res.status(401).json({ msg: "Invalid password" });

  const token = jwt.sign(
    { id: user._id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: "6h" }
  );

  res.json({ msg: "success", token });
};

module.exports = { login };
