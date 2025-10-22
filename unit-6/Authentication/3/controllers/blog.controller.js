const { Blog } = require("../models/blog.model.js");

const createBlog = async (req, res) => {
  try {
    const { title, content, tags, createdAt } = req.body;
    if (!title | !content)
      return res.status(400).json({ error: "Title or content is empty" });
    const createdBy = req.user._id;
    const blog = await Blog.create({
      title,
      content,
      tags,
      createdAt,
      createdBy,
    });
    res.status(200).json({ msg: "created Blog", blog });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getBlogs = async (req, res) => {
  try {
    const createdBy = req.user._id;
    const blogs = await Blog.find({ createdBy });
    res.status(200).json({ msg: "success", blogs });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateBlog = async (req, res) => {
  try {
    const userId = req.user._id;
    const blogId = req.params.id;
    const updates = req.body;
    const blog = await Blog.findById(blogId);
    if (blog.createdBy.toString() !== userId.toString())
      return res.status(403).json({ msg: "Unathorized access" });
    const updated = await Blog.findByIdAndUpdate(blogId, updates, {
      new: true,
    });
    res.status(202).json({ msg: "update success", updated });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteBlog = async (req, res) => {
  try {
    const userId = req.user._id;
    const blogId = req.params.id;
    const blog = await Blog.findById(blogId);
    if (blog.createdBy.toString() !== userId.toString())
      return res.status(403).json({ msg: "Unathorized access" });
    const deleted = await Blog.findByIdAndDelete(blogId);
    res.status(202).json({ msg: "deletion success", deleted });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createBlog, getBlogs, updateBlog, deleteBlog };
