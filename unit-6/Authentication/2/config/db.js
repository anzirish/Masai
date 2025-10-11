const mongoose = require("mongoose");

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected DB");
  } catch (error) {
    console.log("DB error", error.mesage);
  }
};

module.exports = connectToDB