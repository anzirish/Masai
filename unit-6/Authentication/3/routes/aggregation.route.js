const express = require("express")
const { analyticsController } = require("../controllers/analytics.controller.js")

const aggregationRouter = express.Router()

aggregationRouter.get("/", analyticsController)

module.exports = aggregationRouter