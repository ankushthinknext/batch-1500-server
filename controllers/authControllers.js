import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const attemptLogin = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(404).send("User not found");

    let validate = await bcrypt.compare(req.body.password, user.password);
    if (!validate) return res.status(401).send("Authentication unsuccessfull");

    //token genration
    let token = jwt.sign(
      {
        full_name: user.full_name,
        email: user.email,
        isVerified: user.isVerified,
      },
      process.env.JWT_SECRET_KEY,
    );
    res.status(200).send({ succes: true, token });
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

export { attemptLogin };
