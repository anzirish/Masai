const { Blog } = require("../models/blog.model.js");

const analyticsController = async (req, res) => {
  try {
    const totalBlogs = await Blog.aggregate([{ $count: "totalBlogs" }]);
    const blogsPerUser = await Blog.aggregate([
      {
        $group: {
          _id: "$createdBy", 
          blogCount: { $sum: 1 }, 
        },
      },
      {
        $lookup: {
          from: "users", // must match collection name
          localField: "_id", // from blog
          foreignField: "_id", // from user
          as: "userInfo",
        },
      },
      { $unwind: "$userInfo" },
      {
        $project: {
          _id: 0,
          userId: "$_id",
          name: "$userInfo.name",
          email: "$userInfo.email",
          blogCount: 1,
        },
      },
      { $sort: { blogCount: -1 } },
    ]);
    const topTags = await Blog.aggregate([
      { $unwind: "$tags" },
      {
        $group: {
          _id: "$tags",
          count: { $sum: 1 },
        },
      },
      { $sort: { count: -1 } },
      { $limit: 10 },
      {
        $project: {
          _id: 0,
          tag: "$_id",
          count: 1,
        },
      },
    ]);

    res.status(200).json({ totalBlogs, blogsPerUser, topTags });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { analyticsController };
