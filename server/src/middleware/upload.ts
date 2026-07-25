import multer from "multer";

import { CloudinaryStorage } from "multer-storage-cloudinary";

import cloudinary from "../config/cloudinary";

const storage = new CloudinaryStorage({
  cloudinary,

  params: async () => ({
    folder: "goalix-reels",

    resource_type: "video",

    allowed_formats: [
      "mp4",
      "mov",
      "avi",
      "webm",
    ],
  }),
});

const upload = multer({
  storage,

  limits: {
    fileSize:
      100 * 1024 * 1024, // 100MB
  },
});

export default upload;