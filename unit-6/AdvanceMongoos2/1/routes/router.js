const express = require('express')
const addUser = require('../controllers/user.controller.js')
const addProfile = require('../controllers/profile.controller.js')

const router = express.Router()

router.post("/add-user", addUser)
router.post("/add-profile", addProfile)

module.exports = router