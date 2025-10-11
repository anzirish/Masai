const express = require("express");
const {
  createNote,
  updateNote,
  getNotes,
  deleteNote,
} = require("../controllers/note.controller.js");

const noteRouter = express.Router();

noteRouter.post("/", createNote);
noteRouter.put("/:id", updateNote);
noteRouter.get("/", getNotes);
noteRouter.delete("/:id", deleteNote);

module.exports = noteRouter;
