import express from "express";
import {
  createBook,
  deleteBook,
  getBooks,
  insertBulkData,
  updateBook,
} from "../controllers/bookController.js";
import { authorize } from "../middlewares/authorize.js";

export const bookRouter = express.Router();

bookRouter.use(authorize);

bookRouter.post("/bulk", insertBulkData)
bookRouter.post("/", createBook);
bookRouter.get("/", getBooks);
bookRouter.put("/:id", updateBook);
bookRouter.delete("/:id", deleteBook);
