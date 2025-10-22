const Patient = require("../models/patient.model.js");
const Consultation = require("../models/consultation .model.js");

const addPatient = async (req, res, next) => {
  try {
    const patient = new Patient(req.body);
    await patient.save();
    res.status(201).json({ msg: "PAtient added successfully", patient });
  } catch (error) {
    next(error);
  }
};

const getDoctorsList = async (req, res, next) => {
  try {
    const patientId = req.params.id;
    const patient = await Patient.findById(patientId);
    if (!patient) return res.status(404).json({ error: "Patient not found" });
    const doctors = await Consultation.find({ patientId , isActive : true})
      .populate("doctorId")
      .select("name specialization");
    if (doctors.length === 0)
      return res
        .status(404)
        .json({ error: "From no doctor this patient got consulted" });
    return res.status(200).json({ msg: "success", doctors });
  } catch (error) {
    next(error);
  }
};

const getPatients = async (req, res, next) => {
  try {
    const { gender } = req.query;
    const patients = await Patient.find({ gender, isActive: true });
    return res.status(200).json({ patients });
  } catch (error) {
    next(error);
  }
};

const softDelete = async (req, res, next) => {
  try {
    const patientId = req.params.id;
    const patient = await Patient.findById(patientId);
    if (!patient) return res.status(404).json({ error: "Patient not found" });
    await Patient.findByIdAndUpdate(patientId, { isActive: false });
    await Consultation.updateMany({ patientId }, { $set: { isActive: false } });
    return res.status(200).json({ msg: "deletion patient success" });
  } catch (error) {
    next(error);
  }
};

module.exports = { addPatient, getDoctorsList, getPatients, softDelete };
