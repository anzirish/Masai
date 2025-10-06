import express from "express";
import { addAddress, addUser, findUsers, findUsersSummary } from "./UserController.js";

export const router = express.Router();

router.get("/summary", findUsersSummary)
router.get("/:userId", findUsers)
router.post("/:userId/address", addAddress)
router.post("/", addUser);

