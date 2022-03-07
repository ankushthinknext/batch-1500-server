import User from "../models/User.js";
import bcrypt from "bcrypt";

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
    let salt = await bcrypt.genSalt(10);
    let hash = await bcrypt.hash(req.body.password, salt);
    req.body.password = hash;

    let result = await User.create(req.body);
    res.status(201).send(result);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export { createUser, getUsers };
