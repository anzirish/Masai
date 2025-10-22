import request from "supertest";
import { app } from "../app.js";

describe("Base app routes", () => {

  it("should return Server working! message", async () => {
    const res = await request(app).get("/test");
    expect(res.status).toBe(200);
    expect(res.body.message).toBe("Server working!");
  });

  it("should return 404 for invalid route", async ()=>{
    const res = await request(app).get("/invalid-route")
    expect(res.status).toBe(404)
    expect(res.body.message).toBe("Invalid route")
  })
});
