import express from "express";

import admin from "../middleware/admin";

import {
  getDashboardStats,
  getAllUsers,
  deleteUser,
} from "../controllers/adminController";

const router = express.Router();

/* =============================== */
/* ADMIN DASHBOARD */
/* =============================== */

router.get(
  "/stats",
  admin,
  getDashboardStats
);

router.get(
  "/users",
  admin,
  getAllUsers
);

/* =============================== */
/* DELETE USER */
/* =============================== */

router.delete(
  "/users/:id",
  admin,
  deleteUser
);

export default router;