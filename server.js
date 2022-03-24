import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import upload from "./configs/multerConfig.js";
import cloudinary from "./configs/cloudinaryConfig.js";
// const connectDB = require("./dbconn");

import connectDB from "./dbconn.js";
import productsRoute from "./routes/productRoutes.js";
import usersRoutes from "./routes/usersRoute.js";
import authRoutes from "./routes/authRoutes.js";
import { logger } from "./middlewares/logger.js";
const app = express();
app.use(express.json());
app.use(express.static("uploads"));
app.use(cors());

connectDB();

app.use(logger);

app.post("/upload", upload.single("image"), async (req, res) => {
  console.log(req.file);

  try {
    let response = await cloudinary.uploader.upload(req.file.path);
    console.log(response);
  } catch (error) {
    console.log(error.message);
  }
});

// app.use(morgan("tiny"));
app.use("/api/products", productsRoute);

app.use("/api/users", usersRoutes);

app.use("/api/auth", authRoutes);

app.listen(8000, () => {
  console.log("Server running on port 8000");
});
