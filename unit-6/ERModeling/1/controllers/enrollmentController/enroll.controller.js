const Course = require("../../models/course.model.js");
const Enrollment = require("../../models/enrollment.model.js");
const Student = require("../../models/student.model.js");

const makeEnrollment = async (req, res, next) => {
  try {
    const { studentId, courseId } = req.body;
    const student = await Student.findById(studentId);
    if (!student)
      return res
        .status(404)
        .json({ error: "Student not found to make enrollemnt" });
    const course = await Course.findById(courseId);
    if (!course)
      return res
        .status(404)
        .json({ error: "Course not found to make enrollemnt" });

    if (!student.isActive)
      return res
        .status(400)
        .json({ error: "Student inactive to make enrollemnt" });

    if (!course.isActive)
      return res
        .status(400)
        .json({ error: "Course inactive to be included in any enrollemnt" });

    const enrollemnt = new Enrollment({studentId, courseId});
    await enrollemnt.save();
    res.status(200).json({ msg: "success" , enrollemnt});
  } catch (error) {
    next(error);
  }
};

module.exports = makeEnrollment