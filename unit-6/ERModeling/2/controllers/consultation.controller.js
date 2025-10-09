const Consultation = require("../models/consultation .model.js");
const Doctor = require("../models/doctor.model.js");
const Patient = require("../models/patient.model.js");

const addConsultation = async (req, res, next) => {
  try {
    const { doctorId, patientId } = req.body;
    const doctor = await Doctor.findById(doctorId);
    const patient = await Patient.findById(patientId);
    if (!doctor) return res.status(404).json({ error: "Doctor not found" });
    if (!patient) return res.status(404).json({ error: "Patient not found" });
    const consultation = new Consultation(req.body);
    await consultation.save();
    return res.status(201).json({ msg: "success", consultation });
  } catch (error) {
    next(error);
  }
};

const recentConsultations = async (req, res, next) => {
  try {
    const consultaions = await Consultation.find()
      .sort({ consultedAt: -1 })
      .limit(5);
    return res
      .status(200)
      .json({ msg: "success", "Last 5 conslatiosn ": consultaions });
  } catch (error) {
    next(error);
  }
};

module.exports = { addConsultation, recentConsultations };
