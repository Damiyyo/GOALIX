import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import crypto from "crypto";

import User from "../models/User";
import { sendPasswordResetEmail } from "../utils/email";

/* ====================================== */
/* REGISTER USER */
/* ====================================== */

export const registerUser = async (
  req: Request,
  res: Response
) => {
  try {
    const {
      fullName,
      username,
      email,
      password,
    } = req.body;

    // Validate fields
    if (
      !fullName ||
      !username ||
      !email ||
      !password
    ) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    // Check email
    const existingEmail =
      await User.findOne({
        email,
      });

    if (existingEmail) {
      return res.status(400).json({
        message: "Email already exists",
      });
    }

    // Check username
    const existingUsername =
      await User.findOne({
        username,
      });

    if (existingUsername) {
      return res.status(400).json({
        message: "Username already taken",
      });
    }

    // Hash password
    const hashedPassword =
      await bcrypt.hash(
        password,
        10
      );

    // Create user
    const user =
      await User.create({
        fullName,
        username,
        email,
        password: hashedPassword,
      });

    return res.status(201).json({
      message:
        "User registered successfully",

        isNewUser: true,

      user: {
        id: user._id,
        fullName:
          user.fullName,
        username:
          user.username,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Server error",
    });
  }
};

/* ====================================== */
/* LOGIN USER */
/* ====================================== */

export const loginUser = async (req: Request, res: Response) => {

  console.log("JWT_SECRET exists:", !!process.env.JWT_SECRET);

  try {
    const {
      email,
      password,
    } = req.body;

    // Validate fields
    if (
      !email ||
      !password
    ) {
      return res.status(400).json({
        message: "All fields are required",
      });
      
    }

    // Find user
    const user =
      await User.findOne({
        email,
      });

      console.log("Login email:", email);
console.log("User found:", !!user);


    if (!user) {
      return res.status(400).json({
        message:
          "Invalid credentials",
      });
    }

    

    // Compare password
    const isMatch =
      await bcrypt.compare(
        password,
        user.password
      );

      console.log("Password matches:", isMatch);
      
    if (!isMatch) {
      return res.status(400).json({
        message:
          "Invalid credentials",
      });
    }

    // Temporary Admin Override
    const role =
      user.email ===
      "banjooluwadamilola.ng@gmail.com"
        ? "admin"
        : user.role;

        

// Generate JWT
const token = jwt.sign(
  {
    id: user._id,
    username: user.username,
    role,
  },
  process.env.JWT_SECRET as string,
  {
    expiresIn: "7d",
  }
);

    return res.status(200).json({
      message:
        "Login successful",

      token,

      user: {
        id: user._id,
        fullName:
          user.fullName,
        username:
          user.username,
        email: user.email,
        role,
      },
    });
  } catch (error: any) {
    console.error("LOGIN ERROR:");
    console.error(error);
    console.error(error?.stack);
  
    return res.status(500).json({
      message: error?.message || "Server error",
    });
  }
};
/* ====================================== */
/* FORGOT PASSWORD */
/* ====================================== */

export const forgotPassword = async (
  req: Request,
  res: Response
) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        message: "Email is required",
      });
    }

    const user = await User.findOne({
      email,
    });

    // Don't reveal if the email exists
    if (!user) {
      return res.status(200).json({
        message:
          "If an account exists, a password reset email has been sent.",
      });
    }

    const resetToken = crypto
      .randomBytes(32)
      .toString("hex");

    user.resetPasswordToken = resetToken;

    user.resetPasswordExpires = new Date(
      Date.now() + 15 * 60 * 1000
    );

    await user.save();

    await sendPasswordResetEmail(
      user.email,
      resetToken
    );

    return res.status(200).json({
      message:
        "Password reset email sent successfully.",
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Server Error",
    });
  }
};
/* ====================================== */
/* RESET PASSWORD */
/* ====================================== */

export const resetPassword = async (
  req: Request,
  res: Response
) => {
  try {
    const {
      token,
      password,
    } = req.body;

    if (!token || !password) {
      return res.status(400).json({
        message:
          "Token and password are required",
      });
    }

    const user =
      await User.findOne({
        resetPasswordToken: token,
        resetPasswordExpires: {
          $gt: new Date(),
        },
      });

    if (!user) {
      return res.status(400).json({
        message:
          "Reset link is invalid or has expired",
      });
    }

    const hashedPassword =
      await bcrypt.hash(
        password,
        10
      );

    user.password =
      hashedPassword;

    user.resetPasswordToken =
      undefined;

    user.resetPasswordExpires =
      undefined;

    await user.save();

    return res.status(200).json({
      message:
        "Password has been reset successfully",
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message:
        "Server Error",
    });
  }
};