import express from "express";
import { login, refreshToken, signup } from "../controllers/user.controller.js";

export const userRouter = express.Router();

userRouter.post("/signup", signup);
userRouter.post("/login", login);
userRouter.post("/refresh", refreshToken);
