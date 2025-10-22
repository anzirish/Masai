const express = require("express");
const {
  getSessions,
  getCountOfAttendedLearners,
  getMentorsWithoutActiveSessions,
} = require("../controllers/mentor.controller.js");

const mentorRouter = express.Router();

mentorRouter.get("/activesessions", getSessions);
mentorRouter.get("/countattendedlearners", getCountOfAttendedLearners);
mentorRouter.get("/withoutactivesessions", getMentorsWithoutActiveSessions);

module.exports = mentorRouter;
