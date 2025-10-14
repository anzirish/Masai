import express from "express";
import {
  forgotPassword,
  login,
  resetPassword,
  signUp,
} from "../controllers/authControllers.js";
import { validateLogin, validateSignUp } from "../validators/authValidators.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

export const authRoutes = express.Router();

authRoutes.post("/signup", validateSignUp, signUp);
authRoutes.post("/login", validateLogin, login);
authRoutes.post("/forgot-password", authMiddleware, forgotPassword);
authRoutes.post("/reset-password", resetPassword);
