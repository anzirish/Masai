import express from 'express'
import { router } from './routes/api.js'

const app = express()

const PORT = 3000

app.use("/api", router)

app.use((req, res)=>{
    res.json({ "error": "404 Not Found" })
})

app.listen(PORT, ()=>{
    console.log('l isteining')
})