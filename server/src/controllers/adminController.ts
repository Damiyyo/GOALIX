import { Request, Response } from "express";
import User from "../models/User";

/* ====================================== */
/* GET ADMIN DASHBOARD STATS */
/* ====================================== */

export const getDashboardStats = async (
  req: Request,
  res: Response
) => {
  try {
    const now = new Date();

    const today = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate()
    );

    const week = new Date();
    week.setDate(now.getDate() - 7);

    const month = new Date(
      now.getFullYear(),
      now.getMonth(),
      1
    );

    const totalUsers =
      await User.countDocuments();

    const todayUsers =
      await User.countDocuments({
        createdAt: {
          $gte: today,
        },
      });

    const weekUsers =
      await User.countDocuments({
        createdAt: {
          $gte: week,
        },
      });

    const monthUsers =
      await User.countDocuments({
        createdAt: {
          $gte: month,
        },
      });

    res.status(200).json({
      totalUsers,
      todayUsers,
      weekUsers,
      monthUsers,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

/* ====================================== */
/* GET ALL USERS */
/* ====================================== */

export const getAllUsers = async (
  req: Request,
  res: Response
) => {
  try {
    const users = await User.find()
      .select("-password")
      .sort({
        createdAt: -1,
      });

    res.status(200).json(users);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

/* ====================================== */
/* DELETE USER */
/* ====================================== */

export const deleteUser = async (
  req: Request,
  res: Response
) => {
  try {
    const { id } = req.params;

    const user =
      await User.findById(id);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    // Prevent deleting the main admin

    if (
      user.email ===
      "banjooluwadamilola.ng@gmail.com"
    ) {
      return res.status(403).json({
        message:
          "You cannot delete the main admin account.",
      });
    }

    await User.findByIdAndDelete(id);

    return res.status(200).json({
      message:
        "User deleted successfully.",
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Server Error",
    });
  }
};