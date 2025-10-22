import { verifyToken } from "../middleware/auth.js";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import mongoose from "mongoose";

// Mock User model
jest.mock("../models/User.js");

describe("verifyToken middleware", () => {
  let req, res, next, token, user;

  beforeAll(async () => {
    user = { _id: new mongoose.Types.ObjectId(), name: "Test User", email: "a@a.com" };
    User.findById.mockResolvedValue(user); // Mock DB call

    token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || "testsecret");
  });

  beforeEach(() => {
    req = { headers: {} };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    next = jest.fn();
  });

  it("should return 401 if no token provided", async () => {
    await verifyToken(req, res, next);
    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({ message: "No token provided" });
  });

  it("should return 401 if token is invalid", async () => {
    req.headers.authorization = "Bearer invalidtoken";
    await verifyToken(req, res, next);
    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({ message: "Invalid token" });
  });

  it("should call next() and attach req.user if token is valid", async () => {
    req.headers.authorization = `Bearer ${token}`;
    await verifyToken(req, res, next);
    expect(req.user).toEqual(user);
    expect(next).toHaveBeenCalled();
  });
});
