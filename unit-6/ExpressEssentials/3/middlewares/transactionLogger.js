import { getAll, retun } from "../models/bookModel.js";

const book = (id) => {
  return getAll().find((b) => b.id === id);
};

export const transactionLogger = (req, res, next) => {
  const route = req.originalUrl;
  const timestamp = new Date();
  const id = Number(req.params.id);
  if (!id) return res.send("No id provided");
  console.log(book(id), book(id).borrowedBy);
  const returnedBy = book(id).borrowedBy;
  if (route.includes("borrow")) {
    if (!req.body) return res.send("Req bod is empty");
    const { title, borrowedBy } = req.body;
    if (!title || !borrowedBy)
      return res.send("Title or borrower name is empty");
    console.log([timestamp], "borrowed", borrowedBy, title);
  } else {
    console.log([timestamp, returnedBy, "returned", book(id).title]); // might log even if our return gets failed in controller
  }
  next();
};
