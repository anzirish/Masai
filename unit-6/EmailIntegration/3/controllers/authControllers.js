import { User } from "../models/User.js";
import { generateHashCryptoToken } from "../utils/cryptoHelper.js";
import { signRefreshToken } from "../utils/jwtHelper.js";
import nodemailer from "nodemailer";
import crypto from "crypto";

export const signUp = async (req, res, next) => {
  try {
    let user = await User.findById(req.user.email);
    if (user) return res.status(400).json({ error: "User already registered" });
    user = await User.create(req.user);
    res.status(201).json({
      msg: "Signup success",
      user: { id: user._id, email: user.email, role: user.role },
    });
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    let user = await User.findById(req.user.email);
    if (!user) return res.status(404).json({ error: "User not registered" });
    const matched = await user.comparePassword(req.user.password);
    if (!matched) return res.status(401).json({ error: "Invalid password" });
    const token = signRefreshToken(user);
    res.json({
      msg: "Login success",
      user: { id: user._id, email: user.email, role: user.role },
      token,
    });
  } catch (error) {
    next(error);
  }
};

export const forgotPassword = async (req, res, next) => {
  const user = await User.findById(req.user._id);
  const { resetToken, hashedToken } = generateHashCryptoToken();
  user.resetPasswordToken = hashedToken;
  user.resetPasswordExpires = Date.now() + 3600000; // 60 mins
  await user.save();
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "anzirish@gmail.com",
        pass: "kblf qibt nldg ubik", // has been revoked
      },
    });

    await transporter.verify();
    console.log("Server is ready to transmeet the messages");

    const mailOptions = {
      from: "Vipin Dev <anzirish@gmail.com>",
      to: user.email,
      subject: "NEM Student test mail",
      html: `Click <a href="http://localhost:3000/reset-password?token=${resetToken}">here</a> to reset your password.`,
    };

    await transporter.sendMail(mailOptions);
    res.json({ msg: "success" });
  } catch (error) {
    next(error);
    res.json({ error: `Error while sending mail, ${error.message}` });
  }
};

export const resetPassword = async (req, res, next) => {
  try {
    const { token } = req.query; // reset token
    const { newPassword } = req.body;
    const hashedToken = crypto.createHash("sha256").update(token).digest("hex"); // have to hash as db has hashed token
    const user = await User.findOne({
      resetPasswordToken: hashedToken,
      resetPasswordExpires: { $gt: Date.now() },
    });

    if (!user)
      return res.status(400).json({ error: "Invalid or expired token" });

    user.password = newPassword;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    await user.save();
  } catch (error) {
    next(error);
  }
};
