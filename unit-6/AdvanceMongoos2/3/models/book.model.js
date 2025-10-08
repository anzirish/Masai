const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: { type: String, minLength: 3, required: true },
  author: { type: String, required: true },
  status: { type: String, enum: ["available", "borrowed"], required: true },
  borrowers: { type: [mongoose.Schema.Types.ObjectId], ref: "Member" },
  createdAt: { type: Date, default: new Date() },
});

const Book = mongoose.model("books", bookSchema);

module.exports = Book;
