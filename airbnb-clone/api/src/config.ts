import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";

export const mongoConnection = () =>
  mongoose.connect(process.env.MONGO_URL as string);

const expressConfig = () => {
  const app = express();
  const PORT = 4000;

  app.use(express.json());
  app.use(cookieParser());
  app.use(
    cors({
      credentials: true,
      origin: "http://localhost:5173",
    })
  );

  app.listen(PORT, () => {
    console.log(`running on Port ${PORT}`);
  });

  return app;
};

export const expressApplication = expressConfig();
