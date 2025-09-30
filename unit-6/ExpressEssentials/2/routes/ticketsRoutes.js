import express from "express";
import {
  addNewTicket,
  deleteATicket,
  getAllTickets,
  getTicketById,
  markResolve,
  updateATicket,
} from "../controllers/ticketsControllers.js";
import { validateTicket } from "../middlewares/dataCheckMiddleware.js";

export const ticketsRouter = express.Router();

ticketsRouter.get("/:id", getTicketById);
ticketsRouter.get("/", getAllTickets);
ticketsRouter.post("/", validateTicket, addNewTicket);
ticketsRouter.put("/:id", updateATicket);
ticketsRouter.delete("/:id", deleteATicket);
ticketsRouter.patch("/:id/resolve", markResolve);
