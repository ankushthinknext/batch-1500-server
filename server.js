import express from "express";
import cors from "cors";
// const connectDB = require("./dbconn");

import connectDB from "./dbconn.js";
import productsRoute from "./routes/productRoutes.js";

const app = express();
app.use(express.json());
app.use(cors());
connectDB();

app.use("/api/products", productsRoute);

app.listen(8000, () => {
  console.log("Server running on port 8000");
});
