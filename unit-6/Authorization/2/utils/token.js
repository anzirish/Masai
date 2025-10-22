// Not in use Yet

import jwt from "jsonwebtoken";
import { RefreshToken } from "../models/refreshTokenSchema.js";

export const getAccessToken = (payload) => {
  return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: process.env.ACCESS_TOKEN_EXPIRE,
  });
};

export const getRefreshToken = async (id) => {
  const token = jwt.sign({ id }, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: process.env.REFRESH_TOKEN_EXPIRE,
  });
  const decoded = jwt.decode(token);
  const expiresAt = new Date(decoded.exp * 1000); // ms
  await RefreshToken.create({ token, user: id, expiresAt });
  return token;
};

export const deleteRefreshToken = async (token) => {
  await RefreshToken.deleteOne({ token });
};

export const verifyAccessToken = (token) => {
  return jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
};

export const verifyRefreshToken = (token) =>{
    return jwt.verify(token, process.env.REFRESH_TOKEN_SECRET)
}