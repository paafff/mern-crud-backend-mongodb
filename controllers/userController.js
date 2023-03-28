import userDb from "../models/userModel.js";

export const getAllUser = async (req, res) => {
  try {
    const user = await userDb.find();
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getUserById = async (req, res) => {
  try {
    const userById = await userDb.findById(req.params.id);
    res.json(userById);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const saveUser = async (req, res) => {
  const user = new userDb(req.body);
  try {
    const createUser = await user.save();
    res.status(201).json(createUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const renewUser = await userDb.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.status(200).json(renewUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const removeUser = await userDb.deleteOne({ _id: req.params.id });
    res.status(200).json(removeUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
