import express from "express";
const router = express.Router();

import {
  createProduct,
  getProduct,
  getProducts,
} from "../controllers/productsControllers.js";

router.get("/", getProducts);
router.get("/:id", getProduct);
router.post("/", createProduct);

export default router;
