import mongoose from "mongoose";

export const COLLECTION = "library";
const DB_NAME = "libraryDB";

export const connectDB = () => {
  mongoose
    .connect(`mongodb://127.0.0.1:27017/${DB_NAME}`)
    .then(() => console.log("connectioned db"))
    .catch((err) => console.error(err.message));
};
