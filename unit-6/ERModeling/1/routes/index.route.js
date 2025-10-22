const express = require('express')
const { createStudent, deleteStudent, getAllActiveStudents: getActiveStudents } = require('../controllers/studentController/student.controller.js')
const { createCourse, deleteCourse, getActiveCourses } = require('../controllers/courseController/course.controller.js')
const makeEnrollment = require('../controllers/enrollmentController/enroll.controller.js')

const router = express.Router()

router.post("/students", createStudent)
router.post("/courses", createCourse)

router.post("/enroll", makeEnrollment)

router.delete("/students/:id", deleteStudent)
router.delete("/courses/:id", deleteCourse)

router.get("/students/:id/courses", getActiveCourses)
router.get("/courses/:id/students", getActiveStudents)

module.exports = router