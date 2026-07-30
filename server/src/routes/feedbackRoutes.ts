import { Router } from "express";

import {
    submitFeedback,
    getAllFeedback,
    resolveFeedback,
    deleteFeedback,
  } from "../controllers/feedbackController";
  
  const router = Router();
  
  router.post("/", submitFeedback);
  
  router.get("/", getAllFeedback);
  
  router.patch(
    "/:id/status",
    resolveFeedback
  );
  
  router.delete(
    "/:id",
    deleteFeedback
  );
  
  export default router;