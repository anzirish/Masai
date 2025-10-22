const Enrollment = require("../../models/enrollment.model.js");
const Student = require("../../models/student.model.js");

const createStudent = async (req, res, next) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.status(201).json({ message: "Studnet create successfully", student });
  } catch (error) {
    next(error);
  }
};

const deleteStudent = async (req, res, next) => {
  try {
    const studentId = req.params.id;
    const student = await Student.findByIdAndUpdate(studentId, {isActive : false}, {new : true});
    if (!student)
      return res.status(404).json({ error: "Not found this student for deleting" });
    await Enrollment.updateMany({ studentId }, { $set: { isActive: false } });
    res.status(200).json({ msg: "Deleted student suvvessfully", student });
  } catch (error) {
    next(error);
  }
};

const getAllActiveStudents = async (req, res, next) => {
  try {
    const studentId = req.params.id;
    const student = await Student.findById(studentId);
    if (!student) return res.status(404).json({ error: "Not found this student" });
    const enrollements = await Enrollment.find({ studentId }).populate(
      "courseId"
    );
    if (!enrollements)
      return res.status(404).json({ error: "No enrollements found for this student" });
    res.status(200).json({ message: "success", "Enrolled students": enrollements });
  } catch (error) {
    next(error);
  }
};

module.exports = { createStudent, deleteStudent, getAllActiveStudents };
