import jwt from "jsonwebtoken";

export const signRefreshToken = (user) => {
  try {
    return jwt.sign(
      { _id: user._id, role: user.role },
      process.env.JWT_REFRESH_TOKEN_SECRET,
      {
        expiresIn: process.env.JWT_REFRESH_TOKEN_EXPIRY,
      }
    );
  } catch (error) {
    throw new Error(`Token sign Error ${error.message}`);
  }
};

export const verifyRefreshToken = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_REFRESH_TOKEN_SECRET);
  } catch (error) {
    throw new Error(`Invalid refresh token ${error.message}`);
  }
};
