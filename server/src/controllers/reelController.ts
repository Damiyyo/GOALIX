import { Request, Response } from "express";

import cloudinary from "../config/cloudinary";

import Reel from "../models/reel";

/* ====================================== */
/* UPLOAD REEL */
/* ====================================== */

export const uploadReel = async (
  req: Request,
  res: Response
) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        message: "Please upload a video.",
      });
    }

    const {
      title,
      caption,
      category,
    } = req.body;

    const file = req.file as any;

    const reel = await Reel.create({
      title,
      caption,
      category,

      videoUrl: file.path,

      publicId: file.filename,

      uploadedBy: (req as any).user.id,
    });

    return res.status(201).json({
      message:
        "Reel uploaded successfully.",

      reel,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Server Error",
    });
  }
};

/* ====================================== */
/* GET ALL REELS */
/* ====================================== */

export const getAllReels = async (
    req: Request,
    res: Response
  ) => {
    try {
      const reels = await Reel.find()
        .sort({
          createdAt: -1,
        });
  
      return res.status(200).json(reels);
    } catch (error) {
      console.error(error);
  
      return res.status(500).json({
        message: "Server Error",
      });
    }
  };

  /* ====================================== */
/* DELETE REEL */
/* ====================================== */

export const deleteReel = async (
    req: Request,
    res: Response
  ) => {
    try {
      const { id } = req.params;
  
      const reel =
        await Reel.findById(id);
  
      if (!reel) {
        return res.status(404).json({
          message: "Reel not found.",
        });
      }
  
      // Delete from Cloudinary
      await cloudinary.uploader.destroy(
        reel.publicId,
        {
          resource_type: "video",
        }
      );
  
      // Delete from MongoDB
      await Reel.findByIdAndDelete(id);
  
      return res.status(200).json({
        message:
          "Reel deleted successfully.",
      });
    } catch (error) {
      console.error(error);
  
      return res.status(500).json({
        message: "Server Error",
      });
    }
  };