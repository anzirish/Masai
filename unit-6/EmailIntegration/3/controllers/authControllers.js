import { User } from "../models/User.js";

export const signU = async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    res.json({ msg: "Sign up success", user });
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  const { id, email } = req.user;
  try {
    
  } catch (error) {
    next(error);
  }
};
