const { Note } = require("../models/note.model.js");

const createNote = async (req, res) => {
  const { title, content } = req.body;
  if (!title | !content)
    return res.status(400).json({ error: "Title or content is empty" });
  const createdBy = req.user._id;
  const note = await Note.create({ title, content, createdBy });
  res.status(200).json({ msg: "created note", note });
};

const getNotes = async (req, res) => {
  const createdBy = req.user._id;
  const notes = await Note.find({ createdBy });
  res.status(200).json({ msg: "success", notes });
};

const updateNote = async (req, res) => {
  const userId = req.user._id;
  const noteId = req.params.id;
  const updates = req.body;
  const note = await Note.findById(noteId);
  if (note.createdBy.toString() !== userId.toString())
    return res.status(403).json({ msg: "Unathorized access" });
  const updated = await Note.findByIdAndUpdate(noteId, updates, { new: true });
  res.status(202).json({ msg: "update success", updated });
};

const deleteNote = async (req, res) => {
  const userId = req.user._id;
  const noteId = req.params.id;
  const note = await Note.findById(noteId);
  if (note.createdBy.toString() !== userId.toString())
    return res.status(403).json({ msg: "Unathorized access" });
  const deleted = await Note.findByIdAndDelete(noteId);
  res.status(202).json({ msg: "deletion success", deleted });
};

module.exports = { createNote, getNotes, updateNote, deleteNote };
