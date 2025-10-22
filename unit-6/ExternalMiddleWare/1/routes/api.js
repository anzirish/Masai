import express from 'express'
import { limiter } from '../middlewares/rateLimiter.js'

export const router = express.Router()

router.get("/public", (req, res)=>{
res.json({ message: "This is a public endpoint!" })
})

router.get("/limited", limiter, (req, res)=>{
res.json({ message: "You have access to this limited endpoint!" })
})