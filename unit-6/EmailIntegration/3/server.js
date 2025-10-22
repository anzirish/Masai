import express from "express";
import cors from "cors";
import { configDotenv } from "dotenv";
import { authRoutes } from "./routes/authRoutes.js";
import { connectToDB } from "./configs/db.js";
import { orderRoutes } from "./routes/orderRoutes.js";
import { authMiddleware } from "./middlewares/authMiddleware.js";
import { swaggerSpec, swaggerUi } from "./swagger.js";

configDotenv()
connectToDB()
const app = express();
const port = process.env.PORT;

app.use(cors()); // Enables frontend → backend calls
app.use(express.json());
app.use("/auth", authRoutes);
app.use("/orders", authMiddleware, orderRoutes);

// Swagger route
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get("/", (req, res) => {
  res.status(200).json({ msg: "Server is running!!!" });
});

app.use((req, res) => res.status(404).json({ error: "Invalid route" }));

app.use((err, req, res, next) => {
  console.error("[Error] ", err.message);
  res
    .status(err.statusCode || 500)
    .json({ error: err.message || "Something went wrong with the server" });
});

if (!port) {
  console.error("PORT not defined in .env");
  process.exit(1);
}

app.listen(port, () => console.log(`server running on port : ${port}`));
