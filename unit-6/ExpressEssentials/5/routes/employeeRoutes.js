import express from "express";
import {
  addEmployee,
  deleteEmployee,
  getAllEmployees,
  updateEmployee,
} from "../controllers/employeeController.js";
import { rolleChecker } from "../middlewares/roleCheckMiddleware.js";

export const router = express.Router();

router.get("/", getAllEmployees);
router.post("/", rolleChecker, addEmployee);
router.put("/:id", updateEmployee);
router.delete("/:id", rolleChecker, deleteEmployee);
