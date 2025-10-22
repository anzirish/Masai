const Consultation = require("../models/consultation .model.js");
const Doctor = require("../models/doctor.model.js");

const addDoctor = async (req, res, next) => {
  try {
    const doctor = new Doctor(req.body);
    await doctor.save();
    res.status(201).json({ msg: "doctor created", doctor });
  } catch (error) {
    next(error);
  }
};

const getPatientList = async (req, res, next) => {
  try {
    const doctorId = req.params.id;
    const doctor = await Doctor.findById(doctorId);
    if (!doctor) return res.status(404).json({ error: "Doctor not found" });
    const patients = await Consultation.find({ doctorId, isActive : true })
      .populate("patientId")
      .select("name age")
      .sort({ consultedAt: -1 })
      .limit(2);
    if (patients.length === 0)
      return res
        .status(404)
        .json({ error: "No patients found consulted by this soctor" });
    return res.json({ msg: "success", patients });
  } catch (error) {
    next(error);
  }
};

const getTotalNumberOfConsultation = async (req, res, next) => {
  try {
    const doctorId = req.params.id;
    const doctor = await Doctor.findById(doctorId);
    if (!doctor) return res.status(404).json({ error: "Doctor not found" });
    const consultations = await Consultation.find({
      doctorId,
    }).countDocuments();
    res
      .status(200)
      .json({ msg: "success", "No of consultaions ": consultations });
  } catch (error) {
    next(error);
  }
};

const softDelete = async (req, res, next) => {
  try {
    const doctorId = req.params.id;
    const doctor = await Doctor.findById(doctorId);
    if (!doctor) return res.status(404).json({ error: "Doctor not found" });
    await Doctor.findByIdAndUpdate(doctorId, { isActive: false });
    await Consultation.updateMany({ doctorId }, { $set: { isActive: false } });
    return res.status(200).json({ msg: "deletion doctor success" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  addDoctor,
  getPatientList,
  getTotalNumberOfConsultation,
  softDelete,
};
