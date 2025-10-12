import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  serviceName: { type: String, required: true },
  date: { type: Date, required: true },
  status: {
    type: String,
    enum: ["pending", "approved", "rejected", "cancelled"],
    default: "pending",
  },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
});

export const Booking = mongoose.model("Booking", bookingSchema);
