import { getAll } from "../models/bookModel.js";

export const returnCheck = (req, res, next) => {
  const id = Number(req.params.id);
  if (!id) return res.send("No book id provided to borrow");
  const book = getAll().find((b) => b.id === id);
  if (!book) return res.send("No book exists with id");
  const borrowedDate = new Date(book.borrowedDate)
  console.log(typeof borrowedDate)
  const currentDate = new Date();
  const diffTime = currentDate - borrowedDate;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  if (diffDays <= 3) {
    return res.json({
      error: "Book cannot be returned within 3 days of borrowing.",
    });
  }
  return next();
};
