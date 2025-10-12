import express from "express";
import mongoose from "mongoose";
import passport from "passport";
import jwt from "jsonwebtoken";
import session from "express-session";
import dotenv from "dotenv";
import "./passport.js";

dotenv.config();
const app = express();

app.use(session({ secret: "github_secret", resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(process.env.MONGO_URI);

// 🌐 GitHub login route
app.get("/auth/github", passport.authenticate("github", { scope: ["user:email"] }));

// 🎯 Callback route after GitHub login
app.get(
  "/home",
  passport.authenticate("github", { failureRedirect: "/login" }),
  (req, res) => {
    // Generate JWT token for the user
    const token = jwt.sign(
      { id: req.user._id, username: req.user.username },
      process.env.JWT_SECRET,
      { expiresIn: "2h" }
    );

    // Respond with the token (you can redirect or send JSON)
    res.json({ message: "Login successful", token });
  }
);

app.listen(8080, () => console.log("Server running on http://localhost:8080"));
