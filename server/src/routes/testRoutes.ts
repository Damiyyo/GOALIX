import express from "express";
import { testAPI } from "../controllers/testController";

const router = express.Router();

router.get("/", testAPI);

export default router;