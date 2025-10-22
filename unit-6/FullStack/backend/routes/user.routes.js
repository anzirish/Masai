import express from "express";
import { protect } from "../middlewares/auth.js";
import { authorize } from "../middlewares/roles.js";
import { User } from "../models/User.js";

const userRouter = express.Router();

userRouter.get("/", protect, authorize("admin"), async (req,res) => {
  const users = await User.find().select("-password");
  res.json(users);
});

userRouter.get("/profile", protect, async (req,res) => {
  res.json(req.user);
});

userRouter.put("/profile", protect, async (req,res) => {
  const { name, email, password } = req.body;
  if(name) req.user.name = name;
  if(email) req.user.email = email;
  if(password) req.user.password = password;
  await req.user.save();
  res.json(req.user);
});

export default userRouter;
