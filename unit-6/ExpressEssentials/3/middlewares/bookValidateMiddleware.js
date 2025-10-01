export const validate = (req, res, next) => {
  if (!req.body)
    return res.status(400).json({ error: "Request body is empty" });
  const { title, author, genre, publishedYear } = req.body;
  if (!title || !author || !genre || !publishedYear)
    return res
      .status(400)
      .json({ error: "Invalid or not all inputs found for adding the books" });
  return next();
};
