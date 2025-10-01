import express from "express"
import { router } from "./routes/employeeRoutes.js"
import { logger } from "./middlewares/loggerMiddleware.js"

const app = express()

app.use(express.json())
app.use(logger)
app.use("/employees", router)

app.use((req, res) =>{
    res.json({error : "Invalid route"})
})

const PORT = 3000

app.listen(PORT, ()=>{
    console.log("listening...")
})