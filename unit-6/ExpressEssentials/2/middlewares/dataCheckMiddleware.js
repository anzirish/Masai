export const validateTicket = (req, res, next) => {
  const { title, description, priority, user } = req.body;
  if (!title || !title.trim())
    return res.status(404).json({ error: "title is invalid" });
  if (!description || !description.trim())
    return res.status(404).json({ error: "description is invalid" });
  if (!priority || !priority.trim())
    return res.status(404).json({ error: "priority is invalid" });
  if (!user || !user.trim())
    return res.status(404).json({ error: "user is invalid" });
  return next();
};
