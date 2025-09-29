import express from "express";
import fs from "fs";

const app = express();
const port = 3000;

app.use(express.json());

let books = JSON.parse(fs.readFileSync("db.json", "utf-8")) || [];

app.get("/books/search", (req, res) => {
  const author = req.query.author;
  const filteredBooks = books.filter((b) =>
    b.author.toLowerCase().includes(author.toLowerCase())
  );
  if (filteredBooks.length == 0) {
    return res.status(404).send("No book found with this matching author name");
  }
  res.json(filteredBooks);
});

app.get("/books", (req, res) => {
  if (books.length == 0) {
    res.status(404).send("No books found");
  } else {
    res.status(200).send(books);
  }
});

app.get("/books/:id", (req, res) => {
  const id = Number(req.params.id);
  const book = books.find((b) => b.id === id);
  if (!book) {
    res.status(404).send("Book not found wiht this id");
  } else {
    res.status(200).send(book);
  }
});

app.put("/books/:id", (req, res) => {
  const id = Number(req.params.id);
  const { title, author, year } = req.body;
  if (!title || !author || !year) {
    return res.status(400).send("Please provide title, author and year");
  }
  const item = books.find((b) => b.id === id);
  if (item) {
    Object.assign(item, { id, title, author, year });
    fs.writeFileSync("db.json", JSON.stringify(books, null, 2), "utf-8");
    res.status(202).send("Book updated successfully");
  } else {
    res.status(404).send("Book not found wiht this id to update");
  }
});

app.delete("/books/:id", (req, res) => {
  const id = Number(req.params.id);
  const idx = books.findIndex((b) => b.id == id);
  if (idx == -1)
    return res.status(404).send("Book not found wiht this id to delete");
  books.splice(idx, 1);
  fs.writeFileSync("db.json", JSON.stringify(books, null, 2), "utf-8");
  res.status(202).send("Book deleted");
});

app.post("/books", (req, res) => {
  const { title, author, year } = req.body;
  const newBook = { id: Date.now(), title, author, year };
  books.push(newBook);
  fs.writeFileSync("db.json", JSON.stringify(books, null, 2), "utf-8");
  res.status(201).send("Book added successfully");
});

app.use((req, res) => {
  res.status(400).send("Bad request");
});

app.listen(port, () => {
  console.log("listening...");
});
