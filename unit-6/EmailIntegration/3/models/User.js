import bcrypt from "bcrypt";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      match: /^\S+@\S+\.\S+$/, // regex to check email format
    },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ["user", "admin", "chef"],
      default: "user",
      required: true,
    },
    resetPasswordToken: { type: String },
    resetPasswordExpires: { type: Number },
  },
  { timestamps: true }
);

userSchema.methods.comparePassword = async function (enterdPassword) {
  return await bcrypt.compare(enterdPassword, this.password);
};

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  const saltRounds = Number(process.env.PASSWORD_SALT_ROUND_TEST);
  const salt = await bcrypt.genSalt(saltRounds); // best practices
  this.password = await bcrypt.hash(this.password, salt);

  next();
});

export const User = mongoose.model("User", userSchema);
