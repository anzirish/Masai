const bcrypt = require("bcrypt");
const User = require("../models/user.model.js");
const jwt = require("jsonwebtoken");

const signup = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name | !email | !password)
    return res.status(401).json({ msg: "Invalid inputs for sign up" });
  const isUserExists = await User.findOne({ email });
  if (isUserExists) return res.status(402).json({ msg: "User already exists" });
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = User.create({ name, email, password: hashedPassword });
  return res.status(200).json({ msg: "Sign up success" }, user);
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email | !password)
    return res.status(401).json({ msg: "Invalid inputs for login" });
  const user = await User.findOne({ email });
  if (!user) return res.status(402).json({ msg: "User doesn't exists" });
  const passwordMatched = await bcrypt.compare(password, user.password);
  if (!passwordMatched)
    return res.status(401).json({ msg: "Invalid password" });

  const generateToken = jwt.sign(
    { _id: user._id, email },
    process.env.SECRET_TOKEN,
    { expiresIn: "24h" }
  );

  res.status(200).json({ msg: "login success", generateToken });
};

module.exports = { signup, login };
