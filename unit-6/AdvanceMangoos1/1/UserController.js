import { User } from "./UserModel.js";

export const findUsersSummary = async (req, res) => {
  try {
    const users = await User.find();
    const totalUsers = users.length;
    const addressesCount = users.reduce(
      (sum, user) => sum + user.addresses.length,
      0
    );
    const usersList = users.map((user) => {
      return {
        name: user.name,
        addressCount: user.addresses.length,
      };
    });
    res.status(200).json({ totalUsers, addressesCount, users: usersList });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const findUsers = async (req, res) => {
  try {
    const id = req.params.userId;
    const users = await User.findById(id);
    res.json({ users: users });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const addUser = async (req, res) => {
  try {
    const user = new User(req.body);
    const result = await user.save();
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const addAddress = async (req, res) => {
  try {
    const id = req.params.userId;
    const user = await User.findById(id);
    if (!user) {
      console.log(id);
      return res.status(404).json({ error: "User not found" });
    }
    const newAddrss = req.body;
    user.addresses.push(newAddrss);
    const updatedUser = await user.save();
    res.json({ "address added": updatedUser });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
