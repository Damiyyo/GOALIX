import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import cookieParser from "cookie-parser";

import testRoutes from "./routes/testRoutes";
import connectDB from "./database/db";
import authRoutes from "./routes/authRoutes";
import userRoutes from "./routes/userRoutes";
import adminRoutes from "./routes/adminRoutes";
import reelRoutes from "./routes/reelRoutes";
import feedbackRoutes from "./routes/feedbackRoutes";


const app = express();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

app.use(express.json());

const allowedOrigins = [
  "http://localhost:3000",
  "https://goalixx.vercel.app",
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error(`Origin ${origin} not allowed by CORS`));
      }
    },
    credentials: true,
  })
);

app.use(cookieParser());


// Routes
app.use("/api/test", testRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/admin", adminRoutes);
app.use(
  "/api/reels",
  reelRoutes
);
app.use("/api/feedback", feedbackRoutes);


connectDB();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});