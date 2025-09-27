import express from "express";
import authRoutes from "./routes/authRoutes.js";
import notesRoutes from "./routes/notesRoutes.js";
import { errorHandler } from "./middleware/errorHandler.js";
import cors from "cors"; 

const app = express();


app.use(cors({ 
  origin:"https://penguin-apps-task.vercel.app/login",
   credentials: true
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
