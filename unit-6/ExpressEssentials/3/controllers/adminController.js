import express from "express";
import { add, getAll, remove, update } from "../models/bookModel.js";

export const getAllBooks = (req, res) => {
  const books = getAll();
  if (books.length === 0)
    return res.status(404).json({ error: "No books avalibale" });
  return res.status(200).json(books);
};

export const addBook = (req, res) => {
  const { title, author, genre, publishedYear } = req.body;
  const newBook = {
    id: Date.now(),
    title,
    author,
    genre,
    publishedYear,
    status: "available",
    borrowedBy: null,
    borrowedDate: null,
  };
  const result = add(newBook);
  if (result) return res.status(202).json({ status: "success" });
  return res
    .status(404)
    .json({ error: "Something went wrong while adding the book" });
};

export const updateBook = (req, res) => {
  const id = Number(req.params.id);
  const updates = req.body;
  const result = update(id, updates);
  if (result) return res.status(202).json({ status: "success" });
  return res
    .status(404)
    .json({ error: "Something went wrong while updating the book" });
};

export const deleteBook = (req, res) => {
  const id = Number(req.params.id);
  const result = remove(id);
  if (result) return res.status(202).json({ status: "success" });
  return res
    .status(404)
    .json({ error: "Something went wrong while deleting the book" });
};
