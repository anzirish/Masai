const express = require("express");
const {
  getSessions,
  listMentors,
  getActiveLearnersWithMoreThan3Sessions,
} = require("../controllers/learner.controller.js");

const learnerRouter = express.Router();

learnerRouter.get("/activesessions", getSessions);
learnerRouter.get("/listmentors", listMentors);
learnerRouter.get("/getlearners", getActiveLearnersWithMoreThan3Sessions);

module.exports = learnerRouter;
