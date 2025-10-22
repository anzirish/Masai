import { Book } from "../models/Book.js";
import cron from "node-cron";
import {
  getBooksFromRedis,
  getBulkData,
  insertInBulk,
  invalidateRedisCache,
  setBooksToRedis,
} from "../utils/redisHelper.js";

// Proper error handling has been ignored

export const createBook = async (req, res, next) => {
  const addedBy = req.user._id;
  const { title, author } = req.body;
  const book = await Book.create({ title, author, addedBy });
  await invalidateRedisCache(req.user._id);
  res.status(201).json({ msg: "book added successfully", book });
};

export const getBooks = async (req, res) => {
  let books;
  let source = "Redis";
  books = await getBooksFromRedis(req.user._id);
  if (!books) {
    books = await Book.find({});
    source = "Mongo DB";
    await setBooksToRedis(req.user._id, books);
  }
  return res.status(200).json({ books, source });
};

export const updateBook = async (req, res) => {
  const id = req.params.id;
  const { title, author } = req.body;
  const addedBy = req.user._id;
  const book = await Book.findById(id);
  if (!book) res.send("Book doesn't exist");
  if (book.addedBy != addedBy) res.send("Access denied");
  if (title) book.title = title;
  if (author) book.author = author;
  await book.save();
  await invalidateRedisCache(req.user._id);
  res.json({ msg: "Book updated successfully", book });
};

export const deleteBook = async (req, res) => {
  const id = req.params.id;
  const addedBy = req.user._id;
  const book = await Book.findById(id);
  if (!book) res.send("Book doesn't exist");
  if (book.addedBy.toString() !== addedBy.ToString()) res.send("Access denied");
  await Book.findByIdAndDelete(id);
  await invalidateRedisCache(req.user._id);
  res.json({ msg: "Book deleted successfully", book });
};

export const insertBulkData = async (req, res) => {
  await insertInBulk(req.user._id, req.body);
  res.json({ msg: "Added books in cache. Will be inserted in db later" });
  scheduleBulkBooksProcess(req.user._id);
};

const scheduleBulkBooksProcess = (id) => {
  cron.schedule("*/2 * * * *", async () => {
    const books = await getBulkData(id);
    setBulkBooksToDB(id, books);
  });
};

const setBulkBooksToDB = async (id, books) => {
  if(!books) return // must
  books = books.map((b) => ({...b, addedBy : id}));
  console.log(books)
  await Book.insertMany(books)
  await invalidateRedisCache(id)
};
