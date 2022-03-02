import User from "../models/User.js";

const getUsers = async (req, res) => {
  try {
    let result = await User.find().limit(20);
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const createUser = async (req, res) => {
  try {
    let result = await User.create(req.body);
    res.status(201).send(result);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export { createUser, getUsers };
