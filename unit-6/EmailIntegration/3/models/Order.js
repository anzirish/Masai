import mongoose from "mongoose";
import { ORDER_STATUS } from "../constants/orderStatus.js";

const orderSchema = new mongoose.Schema(
  {
    dish: { type: String, required: true },
    price: { type: Number, min: 59, default: 99, required: true },
    status: {
      type: String,
      enum: Object.values(ORDER_STATUS),
      default: ORDER_STATUS.RECEIVED,
      required: true,
    },
    orderedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    chef: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

export const Order = mongoose.model("Order", orderSchema);
