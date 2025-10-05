import mongoose from "mongoose";
import { COLLECTION } from "../config/db.js";

const librarySchema = new mongoose.Schema({
  title: String,
  author: String,
  status: String,
  borrowerName : String,
  borrowDate: Date,
  dueDate: Date,
  returnDate: Date,
  overdueFees: Number,
});

export const Library = mongoose.model(COLLECTION, librarySchema);
