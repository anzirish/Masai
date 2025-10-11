const express = require("express");
const { signup } = require("../controllers/signup.controller.js");
const { login } = require("../controllers/login.controoler.js");
const authMiddleware = require("../middlewares/authMiddleware.js");

const authRouter = express.Router();

authRouter.post("/signup", signup);
authRouter.post("/login", login);

module.exports = authRouter;
