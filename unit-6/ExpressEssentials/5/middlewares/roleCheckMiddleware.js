export const rolleChecker = (req, res, next) => {
  const role = req.headers["x-role"];
  const method = req.method.toLowerCase();
  if ((method === "delete" || method === "put") && role === "hr") {
    return res.json({ error: `${role} not  allowed for this` });
  }
  return next();
};
