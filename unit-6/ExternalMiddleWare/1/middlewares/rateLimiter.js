import rateLimit from "express-rate-limit";

export const limiter = rateLimit({
  windowMs: 5 * 60 * 1000,
  max: 5,
  handler : ((req, res) => res.json({error : "Too many requests, please try again later."}))
});
