import mongoose from "mongoose";

const productsSchema = mongoose.Schema({
  product_name: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 100,
  },
  product_price: {
    type: Number,
    required: true,
    min: 0.01,
    max: 10000000,
  },
  product_description: {
    type: String,
    required: true,
    minLength: 1,
    maxLenght: 500,
  },
  color: String,
});

export default new mongoose.model("products", productsSchema);
