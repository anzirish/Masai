import express from 'express'
import { addUser } from '../controllers/user.controller.js'

export const router = express.Router()

router.post("/add-user", addUser)
router.post("/add-profile/:userId", addUser)