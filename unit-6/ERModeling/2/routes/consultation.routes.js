const express = require("express");
const {
  addConsultation,
  recentConsultations,
} = require("../controllers/consultation.controller.js");

const consultationRouter = express.Router();

consultationRouter.post("/", addConsultation);
consultationRouter.get("/recent", recentConsultations);

module.exports = consultationRouter;
