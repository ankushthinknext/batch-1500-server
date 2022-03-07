import express from "express";
import cors from "cors";
import morgan from "morgan";
// const connectDB = require("./dbconn");

import connectDB from "./dbconn.js";
import productsRoute from "./routes/productRoutes.js";
import usersRoutes from "./routes/usersRoute.js";
import authRoutes from "./routes/authRoutes.js";
import dotenv from "dotenv";
import { logger } from "./middlewares/logger.js";
const app = express();
app.use(express.json());
app.use(cors());

dotenv.config();

connectDB();

app.use(logger);

// app.use(morgan("tiny"));
app.use("/api/products", productsRoute);

app.use("/api/users", usersRoutes);

app.use("/api/auth", authRoutes);

app.listen(8000, () => {
  console.log("Server running on port 8000");
});
