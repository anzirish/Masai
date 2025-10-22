const Course = require("../../models/course.model.js");
const Enrollment = require("../../models/enrollment.model.js");
const Student = require("../../models/student.model.js");

const createCourse = async (req, res, next) => {
  try {
    const course = new Course(req.body);
    await course.save();
    res.status(201).json({ message: "Course created successfully", course });
  } catch (error) {
    next(error);
  }
};

const deleteCourse = async (req, res, next) => {
  try {
    const courseId = req.params.id;
    const course = await Course.findByIdAndUpdate(
      courseId,
      { isActive: false },
      { new: true }
    );
    if (!course)
      return res
        .status(404)
        .json({ error: "Could not find this course for deleting" });
    await Enrollment.updateMany({ courseId }, { $set: { isActive: false } });
    res.status(200).json({
      message: "Deleted course successfully",
      course,
    });
  } catch (error) {
    next(error);
  }
};

const getActiveCourses = async (req, res, next) => {
  try {
    const studentId = req.params.id;
    const student = await Student.find({ studentId });
    if (!student)
      return res.status(404).json({ error: "Could not find this student" });
    const enrollments = await Enrollment.find({ studentId }).populate(
      "courseId"
    );

    if (!enrollments)
      return res.status(404).json({
        error: "Could not find this student in any course enrollements",
      });

    res.status(200).json({
      message: "Success",
      enrolledCourses: enrollments,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { createCourse, deleteCourse, getActiveCourses };
