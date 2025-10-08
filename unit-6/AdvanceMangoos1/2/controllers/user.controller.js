import { User } from "../models/user.model.js";

export const addUser = async (req, res) => {
  try {
    const user = new User(req.body);
    const result = await user.save();
    res.status(201).json({ "user-created": result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const addProfile = async (req, res) => {
  try {
    const id = req.params.userId;
    const newAddress = req.body;
    const user = await User.findById(id);
    user.addresses.push(newAddress);
    await user.save();
    res.status(201).json("address added");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    const { profile } = req.query;
    const filtered = users.map((user) => user.profiles.profileName == profile);
    return res.json({ users: filtered });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const search = async () => {
  try {
    const { name, profile } = req.query;
    if (!name) {
      return res.status(400).json({ error: "Please provide a name" });
    }

    const user = await User.findOne({ name: name });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (profile) {
      const matchedProfile = user.profiles.find(
        (p) => p.profileName === profile
      );

      if (matchedProfile) {
        return res.json({ profile: matchedProfile });
      } else {
        return res.json({
          message: "User found, but profile not found",
          user,
        });
      }
    }
    res.json({ user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

