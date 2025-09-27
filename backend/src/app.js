import express from "express";
import authRoutes from "./routes/authRoutes.js";
import notesRoutes from "./routes/notesRoutes.js";
import { errorHandler } from "./middleware/errorHandler.js";
import cors from "cors"; 

const app = express();


app.use(cors({ 
  origin: process.env.NODE_ENV === 'production' 
    ? ["https://penguin-apps-task.vercel.app/login"] 
    : "http://localhost:5173" 
})); 

app.use(express.json());


app.use("/api/auth", authRoutes);
app.use("/api/notes", notesRoutes);

// Health check endpoint
app.get("/", (req, res) => {
  res.json({ message: "API is running!" });
});


app.use(errorHandler);

export default app;
