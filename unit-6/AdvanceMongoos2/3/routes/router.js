const express = require("express");
const {
  addBook,
  addMember,
  borrowBook,
  returnBook,
  getMemberBorrowedBook,
  getBoookBorroweres,
  updateBookDetails,
  deleteBook,
} = require("../controllers/controller.js");

const router = express.Router();

router.post("/add-book", addBook);
router.post("/add-member", addMember);
router.post("/borrow-book", borrowBook);
router.post("/return-book", returnBook);
router.get("/member-borrowed-books/:memberId", getMemberBorrowedBook);
router.get("/book-borrowers/:bookId", getBoookBorroweres);
router.put("/update-book/:bookId", updateBookDetails);
router.delete("/delete-book/:bookId", deleteBook);

module.exports = router