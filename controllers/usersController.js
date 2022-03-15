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

    let result = await User.create({
      full_name: req.body.full_name,
      password: req.body.password,
      email: req.body.email,
    });
    let { full_name, isVerified, email } = result;
    res.status(201).send({ full_name, isVerified, email, role });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export { createUser, getUsers };
