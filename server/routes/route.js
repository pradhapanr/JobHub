import express from "express";
import { getText } from "../controllers/controller";

const router = express.Router();

router.get("/text", getText);

export default router;
