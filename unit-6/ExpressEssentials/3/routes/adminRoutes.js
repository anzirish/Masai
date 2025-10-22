import express from "express";
import { addBook, deleteBook, getAllBooks, updateBook } from "../controllers/adminController.js";
import { validate } from "../middlewares/bookValidateMiddleware.js";

export const adminRouter = express.Router();

adminRouter.get("/", getAllBooks);
adminRouter.post("/", validate, addBook);
adminRouter.put("/:id", validate, updateBook);
adminRouter.delete("/:id", validate, deleteBook);
