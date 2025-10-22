import express from "express";
import {
  createOrder,
  deleteOrder,
  getOrders,
  updateOrder,
} from "../controllers/orderController.js";
import { permit } from "../middlewares/roleMiddleware.js";

export const orderRoutes = express.Router();

orderRoutes.post("/", permit(["user", "admin"]), createOrder);
orderRoutes.get("/", permit(["user", "admin"]), getOrders);
orderRoutes.put("/:id", permit(["user", "admin", "chef"]), updateOrder);
orderRoutes.delete("/:id", permit(["user", "admin"]), deleteOrder);
