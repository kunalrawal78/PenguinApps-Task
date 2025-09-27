import app from "./app.js";
import dotenv from "dotenv";

dotenv.config();

// Export for Vercel
export default app;

// Only for local development
if (process.env.VERCEL !== '1') {
  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}
