import { User } from "../models/User.js";
import { signRefreshToken } from "../utils/jwtHelper.js";

export const signUp = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) res.send("User with this enmail exists already");
    await User.create({ email, password });
    return res.json({ msg: "signup success" });
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) res.send("User doesn't exists with this email");
    const matched = user.verifyPassword(password);
    if (!matched) return res.send("Password not matched");
    const token = signRefreshToken({ _id: user._id, email: user.email });
    return res.json({ msg: "signup success", token });
  } catch (error) {
    next(error);
  }
};
