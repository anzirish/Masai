import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
  street: String,
  city: String,
  state: String,
  country: { type: String, default: "India" },
  pincode: Number,
});

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  addresses: [addressSchema],
});

export const User = mongoose.model("users", userSchema);
