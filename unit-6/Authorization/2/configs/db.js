import mongoose from "mongoose";

export const connectToDB = async (req, res, next) => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB connected!!!")
  } catch (error) {
    next(error);
    process.exit(1);
  }
};
