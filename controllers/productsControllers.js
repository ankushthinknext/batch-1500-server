import Product from "../models/Product.js";

const getProducts = async (req, res) => {
  try {
    const result = await Product.find().limit(20);
    return res.status(200).send(result);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getProduct = async (req, res) => {
  try {
    const result = await Product.findOne({ _id: req.params.id });
    return res.status(200).send(result);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const createProduct = async (req, res) => {
  try {
    const result = await Product.create(req.body);
    return res.status(201).send("Product created successfully1");
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

export { getProducts, createProduct, getProduct };
