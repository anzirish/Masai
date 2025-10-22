import User from "../models/User.js";
import Todo from "../models/Todo.js";

describe("Todo model", () => {
  let user;

  beforeAll(async () => {
    user = new User({ name: "Test User", email: "user@test.com", password: "123456" });
    await user.save();
  });

  it("should create and save a todo successfully", async () => {
    const todo = new Todo({
      user: user._id,
      title: "Learn Testing",
      description: "Learn how to test Mongoose models"
    });

    const savedTodo = await todo.save();

    expect(savedTodo._id).toBeDefined();
    expect(savedTodo.title).toBe("Learn Testing");
    expect(savedTodo.status).toBe("pending"); // default value
    expect(savedTodo.createdAt).toBeDefined();
    expect(savedTodo.updatedAt).toBeDefined();
  });

  it("should fail if required fields are missing", async () => {
    const todo = new Todo({});
    let err;
    try {
      await todo.save();
    } catch (e) {
      err = e;
    }
    expect(err).toBeDefined();
    expect(err.errors.user).toBeDefined();
    expect(err.errors.title).toBeDefined();
  });

  it("should enforce enum validation on status", async () => {
    const todo = new Todo({ user: user._id, title: "Invalid status", status: "unknown" });
    let err;
    try {
      await todo.save();
    } catch (e) {
      err = e;
    }
    expect(err).toBeDefined();
    expect(err.errors.status).toBeDefined();
  });

  it("should allow updating the status", async () => {
    const todo = new Todo({ user: user._id, title: "Update me" });
    await todo.save();

    todo.status = "done";
    const updatedTodo = await todo.save();

    expect(updatedTodo.status).toBe("done");
  });

  it("should reference the correct user", async () => {
    const todo = new Todo({ user: user._id, title: "Reference test" });
    const savedTodo = await todo.save();

    expect(savedTodo.user.toString()).toBe(user._id.toString());
  });
});
