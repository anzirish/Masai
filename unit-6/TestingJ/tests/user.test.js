import User from "../models/User.js";
import bcrypt from "bcryptjs";

describe("User model", () => {
  it("should hash password before saving", async () => {
    const user = new User({
      name: "Galadriel",
      email: "galdrl@getMaxListeners.com",
      password: "ok1234",
    });
    await user.save();
    expect(user.password).not.toBe("ok1234");
    const isMatch = await bcrypt.compare("ok1234", user.password);
    expect(isMatch).toBe(true);
  });

  it("should compare password and return true for correct password and false for wrong password", async () => {
    const user = new User({
      name: "Galadriel",
      email: "galdrl@getMaxListeners.com",
      password: "ok1234",
    });
    await user.save();
    const result = await user.comparePassword("wringPassword");
    const result2 = await user.comparePassword("ok1234");
    expect(result).toBe(false);
    expect(result2).toBe(true);
  });

  it("should not save without required fileds", async () => {
    const user = new User({});
    let err;
    try {
      await user.save();
    } catch (e) {
      err = e;
    }
    expect(err).toBeDefined();
  });
});
