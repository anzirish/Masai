const express = require("express");
const { recentSessions, listLearners } = require("../controllers/session.controller.js");

const sessionRouter = express.Router()

sessionRouter.get("/recent", recentSessions)
sessionRouter.get("/learners", listLearners)

module.exports = sessionRouter