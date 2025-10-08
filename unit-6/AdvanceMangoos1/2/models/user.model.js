import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minLength: 6 },
  profiles: [
    {
      profileName: {
        type: String,
        enum: ["fb", "twitter", "github", "instagram"],
        required: true,
      },
      url: {
        type: String,
        match: [/^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/[\w-]*)*\/?$/],
        required: true,
      },
    },
  ],
});

export const User = mongoose.model("Users", userSchema);