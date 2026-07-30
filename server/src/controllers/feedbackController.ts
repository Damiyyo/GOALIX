import { Request, Response } from "express";

import Feedback from "../models/feedback.model";

export const submitFeedback = async (
  req: Request,
  res: Response
) => {
  try {
    const {
      userId,
      fullName,
      email,
      category,
      subject,
      message,
      screenshot,
    } = req.body;

    const feedback =
      await Feedback.create({
        userId,
        fullName,
        email,
        category,
        subject,
        message,
        screenshot,
      });

    return res.status(201).json({
      success: true,
      message:
        "Feedback submitted successfully.",
      feedback,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message:
        "Unable to submit feedback.",
    });
  }
};

export const getAllFeedback =
  async (
    req: Request,
    res: Response
  ) => {
    try {
      const feedback =
        await Feedback.find().sort({
          createdAt: -1,
        });

      return res.status(200).json({
        success: true,
        feedback,
      });
    } catch (error) {
      console.error(error);

      return res.status(500).json({
        success: false,
        message:
          "Unable to fetch feedback.",
      });
    }
  };

export const resolveFeedback =
  async (
    req: Request,
    res: Response
  ) => {
    try {
      const feedback =
        await Feedback.findByIdAndUpdate(
          req.params.id,
          {
            status: "resolved",
          },
          {
            new: true,
          }
        );

      if (!feedback) {
        return res.status(404).json({
          success: false,
          message:
            "Feedback not found.",
        });
      }

      return res.status(200).json({
        success: true,
        message:
          "Feedback marked as resolved.",
        feedback,
      });
    } catch (error) {
      console.error(error);

      return res.status(500).json({
        success: false,
        message:
          "Unable to update feedback.",
      });
    }
  };

export const deleteFeedback =
  async (
    req: Request,
    res: Response
  ) => {
    try {
      const feedback =
        await Feedback.findByIdAndDelete(
          req.params.id
        );

      if (!feedback) {
        return res.status(404).json({
          success: false,
          message:
            "Feedback not found.",
        });
      }

      return res.status(200).json({
        success: true,
        message:
          "Feedback deleted successfully.",
      });
    } catch (error) {
      console.error(error);

      return res.status(500).json({
        success: false,
        message:
          "Unable to delete feedback.",
      });
    }
  };