import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true  },
  author: { type: String },
  addedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

export const Book = mongoose.model("Book", bookSchema);
