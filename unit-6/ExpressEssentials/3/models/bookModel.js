import fs from "fs";

const DB_PATH = "db.json";

const writeDb = (books) => {
  fs.writeFileSync(DB_PATH, JSON.stringify(books, null, 2), "utf-8");
};

export const getAll = () => {
  try {
    return JSON.parse(fs.readFileSync(DB_PATH, "utf-8"));
  } catch (error) {
    return [];
  }
};

export const getAvailable = () => {
  const books = getAll();
  return books.filter((b) => b.status === "available");
};

export const add = (book) => {
  const books = getAll();
  books.push(book);
  writeDb(books);
  return book;
};

export const update = (id, updates) => {
  const books = getAll();
  const book = books.find((b) => b.id === id);
  if (!book) return null;
  Object.assign(book, updates);
  writeDb(books);
  return book;
};

export const remove = (id) => {
  const books = getAll();
  const idx = books.findIndex((b) => b.id === id);
  if (idx === -1) return null;
  const removeBook = books.splice(idx, 1)[0];
  writeDb(books);
  return removeBook;
};

export const borrow = (id, borrowedBy) => {
  const books = getAll();
  const book = books.find((b) => b.id === id);
  if (!book) return null;
  const updates = { borrowedBy, borrowedDate: new Date(), status: "borrowed" };
  Object.assign(book, updates);
  writeDb(books);
  return book;
};

export const retun = (id) => {
  const books = getAll();
  const book = books.find((b) => b.id === id && b.status === "borrowed");
  if (!book) return null;
  const updates = { borrowedBy: null, borrowedDate: null, status: "available" };
  Object.assign(book, updates);
  writeDb(books);
  return book;
};
