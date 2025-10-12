export const errorHanlder = (err, req, res, next) => {
  console.log("Error ", err);
  const status = err.statusCode ?? 500;
  res.status(status).json({ error: err.message });
};
