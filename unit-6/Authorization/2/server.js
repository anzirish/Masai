import express from "express";
import { configDotenv } from "dotenv";
import { connectToDB } from "./configs/db.js";
import { userRouter } from "./routes/user.route.js";
import { serviceRouter } from "./routes/booking.route.js";
import { errorHanlder } from "./middlewares/errorhandler.middleware.js";

const app = express();
configDotenv();
connectToDB();

app.use(express.json());

app.use("/user", userRouter);
app.use("/bookings", serviceRouter);

app.use((req, res) => res.json({ error: "Invalid route" }));

app.use(errorHanlder);

app.listen(process.env.PORT, () => console.log("listening..."));
