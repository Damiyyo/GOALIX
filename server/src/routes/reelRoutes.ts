import express from "express";

import upload from "../middleware/upload";
import admin from "../middleware/admin";

import {
  uploadReel,
  getAllReels,
  deleteReel,
} from "../controllers/reelController";

const router = express.Router();

/* =============================== */
/* PUBLIC */
/* =============================== */

router.get(
  "/",
  getAllReels
);

/* =============================== */
/* ADMIN */
/* =============================== */

router.post(
  "/upload",
  admin,
  upload.single("video"),
  uploadReel
);

router.delete(
  "/:id",
  admin,
  deleteReel
);

export default router;