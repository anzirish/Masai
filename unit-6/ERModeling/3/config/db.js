const mongoose = require("mongoose");

const connectToDB = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("DB Connected"))
    .catch((e) => console.log("DB failed to connect", e.message));
};

module.exports = connectToDB
