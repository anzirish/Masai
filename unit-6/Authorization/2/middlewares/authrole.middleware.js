import jwt from "jsonwebtoken";

export const authorize = (req, res, next) => {
  try {
    const accessToken = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
    if (!decoded) throw new Error("Token is invalid or expired");
    req.user = decoded;
    next();
  } catch (error) {
    next(error);
  }
};
