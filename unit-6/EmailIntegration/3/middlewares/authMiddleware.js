import { verifyRefreshToken } from "../utils/jwtHelper.js";

export const authMiddleware = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer "))
      return res.status(401).json({ error: "Token not provided" });

    const token = authHeader.split(" ")[1].trim();
    const user = verifyRefreshToken(token);

    if (!user)
      return res.status(400).json({ error: "The token is invalid or expired" });
    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};
