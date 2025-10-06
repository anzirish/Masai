import mongoose from "mongoose";

export const connectToDB = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/usersDB")
    .then(() => console.log("DB connected"))
    .catch((e) => console.log(e.message));
};
