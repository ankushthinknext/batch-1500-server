import express from "express";
const router = express.Router();

import { attemptLogin } from "../controllers/authControllers.js";

router.post("/", attemptLogin);

export default router;
