import { Booking } from "../models/booking.model.js";

export const createBooking = async (req, res, next) => {
  try {
    const { serviceName, date, status } = req.body;
    const userId = req.user.id;
    const booking = await Booking.create({ serviceName, date, status, userId });
    res.status(201).json({ msg: "success", booking });
  } catch (error) {
    next(error);
  }
};

export const getBookings = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const bookings = await Booking.find({ userId });
    res.status(201).json({ msg: "success", bookings });
  } catch (error) {
    next(error);
  }
};

export const updateBooking = async (req, res) => {
  try {
    const userId = req.user.id;
    const id = req.params.id;
    const updates = req.body;
    const booking = await Booking.findById(id);
    if (!booking) throw new Error("Booking does not exisst");
    if (booking.userId !== userId)
      throw new Error("Not authorized to access this");
    if (booking.status !== "pending")
      throw new Error(`Can't update as status is ${booking.status}`);
    updates.status = booking.status; // neutrilize explicit status conversion by a user
    const updated = await Booking.findByIdAndUpdate(
      id,
      { updates },
      { new: true }
    );
    res.status(200).json({ msg: "success" }, updated);
  } catch (error) {
    next(error);
  }
};

export const cancelBooking = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const id = req.params.id;
    const updates = req.body;
    const booking = await Booking.findById(id);
    if (!booking) throw new Error("Booking does not exisst");
    if (booking.userId !== userId)
      throw new Error("Not authorized to access this");
    if (booking.status !== "pending")
      throw new Error(`Can't delete as status is ${booking.status}`);
    updates.status = "cancelled";
    const cancelled = await Booking.findByIdAndUpdate(
      id,
      { updates },
      { new: true }
    );
    res.status(200).json({ msg: "success" }, cancelled);
  } catch (error) {
    next(error);
  }
};

export const approveBooking = async (req, res, next) => {
  if (req.user.role !== "admin")
    throw new Error("Excewpt admin noone pemitted to perform this action");
  try {
    const id = req.params.id;
    const booking = await Booking.findById(id);
    if (!booking) throw new Error("Booking does not exisst");
    if (booking.status === "approved")
      throw new Error(`Booking is already approved`);
    if (booking.status === "cancelled")
      throw new Error(`Booking has been cancelled`);
    booking.status = "approved";
    const approved = await Booking.findByIdAndUpdate(
      id,
      { booking },
      { new: true }
    );
    res.status(200).json({ msg: "success" }, approved);
  } catch (error) {
    next(error);
  }
};

export const rejectBooking = async (req, res, next) => {
  if (req.user.role !== "admin")
    throw new Error("Excewpt admin noone pemitted to perform this action");
  try {
    const id = req.params.id;
    const booking = await Booking.findById(id);
    if (!booking) throw new Error("Booking does not exisst");
    if (booking.status === "approved")
      throw new Error(`Booking is already approved. Can't reject now`);
    if (booking.status === "rejected")
      throw new Error(`Booking is already rejected`);
    if (booking.status === "cancelled")
      throw new Error(`Booking has been cancelled`);
    booking.status = "rejected";
    const rejected = await Booking.findByIdAndUpdate(
      id,
      { booking },
      { new: true }
    );
    res.status(200).json({ msg: "success" }, rejected);
  } catch (error) {
    next(error);
  }
};

export const deleteBooking = async (req, res, next) => {
  if (req.user.role !== "admin")
    throw new Error("Excewpt admin noone pemitted to perform this action");
  try {
    const id = req.params.id;
    const booking = await Booking.findById(id);
    if (!booking) throw new Error("Booking does not exisst");
    const deleted = await Booking.findByIdAndDelete(id);
    res.status(200).json({ msg: "success" }, deleted);
  } catch (error) {
    next(error);
  }
};
