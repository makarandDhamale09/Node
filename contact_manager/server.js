import express from "express";
import dotenv from "dotenv";
import contactRoutes from "./routes/contactRoutes.js";
import errorHandler from "./middleware/errorHandler.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // Middleware to parse JSON bodies
app.use("/api/contacts", contactRoutes);
app.use(errorHandler); // Error handling middleware

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
