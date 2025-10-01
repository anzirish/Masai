import express from "express";
import { adminRouter } from "./routes/adminRoutes.js";
import { readerRouter } from "./routes/readerRoutes.js";
import { logger } from "./middlewares/loggerMiddleware.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger)
app.use("/admin", adminRouter);
app.use("/reader", readerRouter);

app.use((req, res) => {
  res.json({ error: "invalid route" });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log("listeining....");
});
