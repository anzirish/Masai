import bcrypt from "bcrypt";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      match: /^\S+@\S+\.\S+$/, // low grade
    },
    password: { type: String, required: true, minLength: 6 },
  },
  { timestamps: true }
);

userSchema.methods.verifyPassword = async function (enteredPAssword) {
  try {
    return await bcrypt.compare(enteredPAssword, this.password);
  } catch (error) {
    console.log(error.message);
  }
};

userSchema.pre("save", async function (next) {
  try {
    if (!this.isModified("password")) return next();
    const salt = await bcrypt.genSalt(Number(process.env.HASH_SALT_ROUND));
    this.password = bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    console.log(error.message);
  }
});

export const User = mongoose.model("User", userSchema);
