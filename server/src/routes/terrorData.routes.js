import express from "express";
import { getTerrorData } from "../controllers/terrorData.controllers";

const router = express.Router();

router.get("/", getTerrorData);

export default router;
