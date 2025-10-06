import { User } from "../models/user.model.js";

export const addUser = async (req, res) => {
  try {
    const user = new User(req.body);
    const result = await user.save();
    res.status(201).json({ "user-created": result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};