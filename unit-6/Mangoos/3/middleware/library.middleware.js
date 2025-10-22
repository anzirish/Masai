export const validateInput = (req, res, next) => {
  if (!req.body) return res.status(400).json({ error: "No data" });
  const {
    title,
    author,
    status,
    borrowerName,
    borrowDate,
    dueDate,
    returnDate,
    overdueFees,
  } = req.body;

  if (!title || !author || !status)
    return res.status(400).json({ error: "Incomplete data" });

  return next();
};

export const borrowing
