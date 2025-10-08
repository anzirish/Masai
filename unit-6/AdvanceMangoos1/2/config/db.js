import mongoose from "mongoose";

export const connectToDb = async() => {
  await mongoose
    .connect("mongodb://127.0.0.1:27017/newDB")
    .then(() => console.log("Connected to db"))
    .catch((e) => console.log(e.message));
};
