import mongoose from "mongoose";

export const connectToDb = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/usersDB2")
    .then(() => console.log("Connected to db"))
    .catch((e) => console.log(e.message));
};
