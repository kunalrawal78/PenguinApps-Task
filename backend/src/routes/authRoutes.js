import express from "express";
import { login } from "../controllers/authController.js";

const router = express.Router();


router.post("/login", login);
router.get("/", (req, res) => {
  res.json({ message: "Auth API is working!" });
});

// In notesRoutes.js
router.get("/test", (req, res) => {
  res.json({ message: "Notes API is running" });
});

export default router;
