require("dotenv").config();
const express = require("express");
const passport = require("passport");
const GitHubStrategy = require("passport-github2").Strategy;
const jwt = require("jsonwebtoken");
const connectToDB = require("./db.js");
const User = require("./user.js");

const app = express();

connectToDB();

// Passport setup
passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: process.env.GITHUB_CALLBACK_URL,
      scope: ["user:email"],
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        let email =
          profile.emails && profile.emails[0] ? profile.emails[0].value : null;
        const userData = {
          githubId: profile.id,
          username: profile.username,
          email,
        };
        done(null, userData);
      } catch (err) {
        done(err);
      }
    }
  )
);

app.use(passport.initialize());

// Routes

app.get(
  "/auth/github",
  passport.authenticate("github", { scope: ["user:email"] })
);

app.get(
  "/home",
  passport.authenticate("github", {
    session: false,
    failureRedirect: "/auth/failure",
  }),
  async (req, res) => {
    try {
      let user = await User.findOne({ githubId: req.user.githubId });
      if (!user) user = await User.create(req.user);

      const token = jwt.sign(
        { id: user._id, githubId: user.githubId, username: user.username },
        process.env.JWT_SECRET,
        { expiresIn: "7d" }
      );

      res.json({ token });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
);

app.get("/auth/failure", (req, res) =>
  res.status(401).json({ error: "GitHub login failed" })
);

app.listen(process.env.PORT, () => console.log(`listening...`));
