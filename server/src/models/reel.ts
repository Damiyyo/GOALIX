import mongoose, {
    Schema,
    Document,
  } from "mongoose";
  
  export interface IReel
    extends Document {
    title: string;
  
    caption: string;
  
    category: string;
  
    videoUrl: string;
  
    publicId: string;
  
    uploadedBy: mongoose.Types.ObjectId;
  
    views: number;
  
    likes: number;
  }
  
  const reelSchema =
    new Schema<IReel>(
      {
        title: {
          type: String,
          required: true,
        },
  
        caption: {
          type: String,
          required: true,
        },
  
        category: {
          type: String,
          default: "General",
        },
  
        videoUrl: {
          type: String,
          required: true,
        },
  
        publicId: {
          type: String,
          required: true,
        },
  
        uploadedBy: {
          type: Schema.Types.ObjectId,
          ref: "User",
        },
  
        views: {
          type: Number,
          default: 0,
        },
  
        likes: {
          type: Number,
          default: 0,
        },
      },
      {
        timestamps: true,
      }
    );
  
  export default mongoose.model<IReel>(
    "Reel",
    reelSchema
  );