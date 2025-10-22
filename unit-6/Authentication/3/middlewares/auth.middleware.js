const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  if (!token) return res.status(404).json({ error: "Token not provided" });
  try {
    const decoded = jwt.verify(token, process.env.SECRET_TOKEN);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { authMiddleware };
