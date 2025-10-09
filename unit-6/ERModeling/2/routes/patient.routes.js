const express = require("express");
const {
  addPatient,
  getDoctorsList,
  getPatients,
  softDelete,
} = require("../controllers/patient.controller.js");

const patientRouter = express.Router();

patientRouter.post("/", addPatient);
patientRouter.get("/:id/doctor", getDoctorsList);
patientRouter.get("/", getPatients);
patientRouter.delete("/:id", softDelete);

module.exports = patientRouter;
