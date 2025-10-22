import request from "supertest";
import { app } from "../app.js";
import User from "../models/User.js";
import jwt from "jsonwebtoken";

describe("Protected routes using verifyToken", () => {
  let user, token;

  beforeAll(async () => {
    user = new User({ name: "Alice", email: "a@a.com", password: "123456" });
    await user.save();
    token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || "testsecret");
  });

  it("should reject request without token", async () => {
    const res = await request(app).get("/api/v1/todos");
    expect(res.status).toBe(401);
    expect(res.body.message).toBe("No token provided");
  });

  it("should reject request with invalid token", async () => {
    const res = await request(app)
      .get("/api/v1/todos")
      .set("Authorization", "Bearer invalidtoken");
    expect(res.status).toBe(401);
    expect(res.body.message).toBe("Invalid token");
  });

  it("should allow request with valid token", async () => {
    const res = await request(app)
      .get("/api/v1/todos")
      .set("Authorization", `Bearer ${token}`);
    expect(res.status).toBe(200); // depends on route logic
  });
});
