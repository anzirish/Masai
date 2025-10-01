import { transactionLogger } from "../middlewares/transactionLogger.js";
import { borrow, getAvailable, retun } from "../models/bookModel.js";

export const getBooks = (req, res) => {
  const books = getAvailable();
  if (books.length === 0)
    return res.status(404).json({ error: "0 available books found" });
  res.json({ books });
};

export const borrowBook = (req, res) => {
  const id = Number(req.params.id);
  const { borrowedBy } = req.body;
  if (!id || !borrowedBy)
    return res.status(404).json({ error: "id ot borrower id empty" });
  const result = borrow(id, borrowedBy);
  if (result) res.json({ borrowed: result });
  return res.json({ error: "This book is not available to borrow" });
};

export const returnBook = (req, res) => {
  const id = Number(req.params.id);
  if (!id) return res.status(404).json({ error: "id is empty" });
  const result = retun(id);
  if (result) res.json({ returned: result });
  return res.json({ error: "This book is borrowed or Something went wrong" });
};
