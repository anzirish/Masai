const express = require("express");
const {
  createBlog,
  updateBlog,
  getBlogs,
  deleteBlog,
} = require("../controllers/blog.controller.js");

const blogRouter = express.Router();

blogRouter.post("/", createBlog);
blogRouter.put("/:id", updateBlog);
blogRouter.get("/", getBlogs);
blogRouter.delete("/:id", deleteBlog);

module.exports = blogRouter;
