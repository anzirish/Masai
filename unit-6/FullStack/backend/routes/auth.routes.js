import express from "express";
import jwt from "jsonwebtoken";
import { User } from "../models/User.js";
import { signRefreshToken } from "../utils/jwtHelper.js";

const authRouter = express.Router();

// Register
authRouter.post("/register", async (req, res) => {
  const { name, email, password, role } = req.body;
  try {
    const userExists = await User.findOne({ email });
    if (userExists)
      return res.status(400).json({ message: "Email already exists" });
    const user = await User.create({ name, email, password, role });
    const token = signRefreshToken({ _id: user._id, role: user.role });
    return res
      .status(201)
      .json({ message: "registered successfully", token, user });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

// Login
authRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });
    const isMatch = await user.verifyPassword(password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });
    const token = signRefreshToken({ _id: user._id, role: user.role });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default authRouter;
