import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

const generateTokens = (user) => {
  try {
    const refreshToken = jwt.sign(
      { id: user._id, role: user.role },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: "7d" }
    );
    const accessToken = jwt.sign(
      { id: user._id },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "15m" }
    );
    return { refreshToken, accessToken };
  } catch (error) {
    console.log(error);
  }
};

export const signup = async (req, res, next) => {
  try {
    const { username, email, password, role } = req.body;
    const isExists = await User.findOne({ email });
    const usernameExists = await User.findOne({ username });
    if (isExists) throw new Error("User already exists");
    if (usernameExists) throw new Error("Username already in use");
    const hashed = await bcrypt.hash(password, 10);
    const user = await User.create({ username, email, password: hashed, role });
    res.status(200).json({ msg: "signup success", user });
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const user = await User.findOne({ email });
    const usernameExists = await User.findOne({ username });
    if (!user) throw new Error("User doesn't exists");
    if (!usernameExists) throw new Error("Username doesn't exist");
    const isPasswordMatched = await bcrypt.compare(password, user.password);
    if (!isPasswordMatched) throw new Error("Password not matched");
    const { refreshToken, accessToken } = generateTokens(user);
    res.status(200).json({
      msg: "login success",
      user,
      tokens: { refreshToken, accessToken },
    });
  } catch (error) {
    next(error);
  }
};

export const refreshToken = () => {
  const { refreshToken } = req.body;
  if (!refreshToken) return res.status(401).json({ msg: "No refresh token" });
  try {
    const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
    const newAccessToken = jwt.sign(
      { decoded },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "15m" }
    );
    res.json({ newAccessToken });
  } catch (error) {
    res.status(403).json({ msg: "Invalid refresh token" });
  }
};
