const mongoose = require("mongoose");

const connectToDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/mydb");
    console.log("DB connected!!");
  } catch (error) {
    console.log("DB connection error", error.message);
  }
};

module.exports = connectToDB;
