import mongoose from "mongoose";

export const COLLECTION = "library";
const DB_NAME = "libraryDB";

export const connectDB = () => {
  mongoose
    .connect(`mongodb+srv://aimemesofficial_db_user:o9PQ0J7lbSIOZRNd@cluster0hello.49pnlkx.mongodb.net/${DB_NAME}?retryWrites=true&w=majority&appName=Cluster0Hello`)
    .then(() => console.log("connectioned db"))
    .catch((err) => console.error(err.message));
};
