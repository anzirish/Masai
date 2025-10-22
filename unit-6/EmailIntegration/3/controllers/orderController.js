import { Order } from "../models/Order.js";
import { User } from "../models/User.js";

export const createOrder = async (req, res, next) => {
  try {
    const user = req.user;
    const { dish, price, role } = req.body;
    const orderedBy = user._id;
    const chefs = await User.find({ role: "chef" });
    if (chefs.length === 0)
      return res
        .status(404)
        .json({ error: "No chef found to assign for this order" });
    const chef = chefs[Math.floor(Math.random() * chefs.length)]; // get chef randomly
    const order = await Order.create({ dish, price, role, orderedBy, chef });
    return res.status(201).json({ msg: "Order created", order });
  } catch (error) {
    next(error);
  }
};

export const getOrders = async (req, res, next) => {
  try {
    const user = req.user;
    const orders =
      user.role === "user"
        ? await Order.findById(user._id)
        : await Order.find({});
    res.status(200).json({ msg: "success", orders });
  } catch (error) {
    next(error);
  }
};

export const updateOrder = async (req, res, next) => {
  try {
    const user = req.user;
    const role = user.role;
    const orderId = req.params.id;
    const { dish, price, status, chef, createdBy } = req.body;
    const order = await Order.findById(orderId);
    if (!order)
      return res.status(404).json({ error: "This order doesn't exist" });
    if (role === "user") {
      if (order.createdBy !== user._id)
        return res.status(401).json({ error: "Unathorized access" });
      if (dish) order.dish = dish;
      if (price) order.price = price;
      await order.save();
      res.staus(200).json({ msg: "Order updated by user", order });
    } else if (role === "chef") {
      if (status) order.status = status;
      await order.save();
      res.staus(200).json({ msg: "Order updated by chef", order });
    } else {
      // admin
      if (dish) order.dish = dish;
      if (price) order.price = price;
      if (status) order.status = status;
      if (createdBy) order.createdBy = status; // we can add valiations here
      if (chef) order.chef = status; // we can add valiation here too
      await order.save();
      res.staus(200).json({ msg: "Order updated by admin", order });
    }
  } catch (error) {
    next(error);
  }
};

export const deleteOrder = async (req, res, next) => {
  try {
    const orderId = req.params.id;
    const user = req.user;
    const order = await Order.findById(orderId);
    if (!order)
      return res.status(404).json({ error: "This order doesn't exist" });
    if (user.role === "user") {
      if (user._id !== order.createdBy)
        return res.staus(401).json({ error: "Unauthorized access" });
      const deleted = await Order.findByIdAndDelete(orderId);
      res.status(200).json({ msg: "deleteion success", deleted });
    } else{
      const deleted = await Order.findByIdAndDelete(orderId);
      res.status(200).json({ msg: "deleteion success", deleted });
    }
  } catch (error) {
    next(error)
  }
};
