const Book = require("../models/book.model.js");
const Member = require("../models/member.model.js");
const mongoose = require("mongoose")

const addBook = async (req, res) => {
  try {
    const book = req.body;
    book.status = "available";
    const newBook = new Book(book);
    await newBook.save();
    res.status(201).json({ message: "Book created", newBook });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const addMember = async (req, res) => {
  try {
    const newMember = new Member(req.body);
    await newMember.save();
    res.status(201).json({ message: "Member created", newMember });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const borrowBook = async (req, res) => {
  try {
    const { bookId, memberId } = req.body;
     if (!mongoose.Types.ObjectId.isValid(bookId))
      return res.status(400).json({ error: "Invalid book ID" });

    if (!mongoose.Types.ObjectId.isValid(memberId))
      return res.status(400).json({ error: "Invalid member ID" });
    const book = await Book.findById(bookId);
    if (!book) return res.status(404).json({ error: "Book not found" });
    const member = await Member.findById(memberId);
    if (!member) return res.status(404).json({ error: "Member not found" });

    book.status = "borrowed";
    book.borrowers.addToSet(memberId);
    member.borrowedBooks.addToSet(bookId);
    await book.save();
    await member.save();
    res
      .status(202)
      .json({ message: "Borrowed book successfully", book, member });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const returnBook = async (req, res) => {
  try {
    const { bookId, memberId } = req.body;
    const book = await Book.findById(bookId);
    if (!book) return res.status(404).json({ error: "Book not found" });
    const member = await Member.findById(memberId);
    if (!member) return res.status(404).json({ error: "Member not found" });

    book.status = "available";
    book.borrowers.pull(memberId);
    member.borrowedBooks.pull(bookId);
    await book.save();
    await member.save();
    res
      .status(202)
      .json({ message: "Returned book successfully", book, member });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getMemberBorrowedBook = async (req, res) => {
  try {
    const memberId = req.params.id;
    const member = await Member.findById(memberId).populate("borrowedBooks");
    if (!member) return res.status(404).json({ error: "Member not found" });
    return res.json({
      member: {
        borrowedBooks: member.borrowedBooks,
      },
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getBoookBorroweres = async (req, res) => {
  try {
    const bookId = req.params.id;
    const book = await Book.findById(bookId).populate("borrowers");
    if (!book) return res.status(404).json({ error: "Book not found" });
    return res.json({
      book: {
        borrowers: book.borrowers,
      },
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateBookDetails = async (req, res) => {
  try {
    const bookId = req.params.id;
    const { title, author } = req.body;
    const book = await Book.findByIdAndUpdate(
      bookId,
      { title, author },
      { new: true }
    );
    if (!book) return res.status(404).json({ error: "Book not found" });
    res.status(202).json({ msg: "Book details updated", book });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteBook = async (req, res) => {
  try {
    const bookId = req.params.id;
    const book = await Book.findByIdAndDelete(bookId);
    if (!book) return res.status(404).json({ error: "Book not found" });
    await Member.updateMany(
      { borrowedBooks: bookId },
      { $pull: { borrowedBooks: bookId } }
    );
    res.status(202).json({ msg: "Book details deleted", book });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  addBook,
  addMember,
  borrowBook,
  returnBook,
  getMemberBorrowedBook,
  getBoookBorroweres,
  updateBookDetails,
  deleteBook,
};
