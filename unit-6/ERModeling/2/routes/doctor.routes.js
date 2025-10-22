const express = require("express");
const {
  addDoctor,
  getPatientList,
  getTotalNumberOfConsultation,
  softDelete,
} = require("../controllers/doctor.controller.js");

const doctorRouter = express.Router();

doctorRouter.post("/", addDoctor);
doctorRouter.get("/:id/patients", getPatientList);
doctorRouter.get("/:id/consultations/count", getTotalNumberOfConsultation);
doctorRouter.delete("/:id", softDelete);

module.exports = doctorRouter