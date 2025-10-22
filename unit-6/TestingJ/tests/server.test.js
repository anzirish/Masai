import mongoose from "mongoose";

describe("Mongodb server setup",  () => {
  it("should connect to an in-memory mongo server", async () => {
    const state = mongoose.connection.readyState;
    expect(state).toBe(1); // 1 means connected
  });
});