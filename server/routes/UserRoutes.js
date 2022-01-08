import express from "express";
import { getText } from "../controllers/UserController";

const router = express.Router();

router.get("/users", getText);

export default router;
