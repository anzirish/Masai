import express from "express";
import { authorize } from "../middlewares/authrole.middleware.js";
import {
  approveBooking,
  cancelBooking,
  createBooking,
  deleteBooking,
  getBookings,
  rejectBooking,
  updateBooking,
} from "../controllers/booking.controller.js";
import { permit } from "../middlewares/permit.middlerware.js";

export const serviceRouter = express.Router();

serviceRouter.use(authorize);

serviceRouter.post("/", permit("user", "admin"), createBooking);
serviceRouter.get("/", permit("user", "admin"), getBookings);
serviceRouter.put("/:id", permit("user", "admin"), updateBooking);
serviceRouter.delete("/:id/cancel", permit("user", "admin"), cancelBooking);
serviceRouter.patch("/:id/approve", permit("admin"), approveBooking);
serviceRouter.patch("/:id/reject", permit("admin"), rejectBooking);
serviceRouter.delete("/:id", permit("admin"), deleteBooking);
