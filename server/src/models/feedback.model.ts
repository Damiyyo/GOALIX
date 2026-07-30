import mongoose, {
    Schema,
    Document,
  } from "mongoose";
  
  export interface IFeedback
    extends Document {
    userId?: string;
  
    fullName: string;
  
    email: string;
  
    category: string;
  
    subject: string;
  
    message: string;
  
    status:
      | "new"
      | "resolved";
  }
  
  const FeedbackSchema =
    new Schema(
      {
        userId: {
          type: String,
        },
  
        fullName: {
          type: String,
          required: true,
        },
  
        email: {
          type: String,
          required: true,
        },
  
        category: {
          type: String,
          required: true,
        },
  
        subject: {
          type: String,
          required: true,
        },
  
        message: {
          type: String,
          required: true,
        },
  
        status: {
          type: String,
  
          enum: [
            "new",
            "resolved",
          ],
  
          default: "new",
        },
      },
      {
        timestamps: true,
      }
    );
  
  export default mongoose.model<
    IFeedback
  >(
    "Feedback",
    FeedbackSchema
  );