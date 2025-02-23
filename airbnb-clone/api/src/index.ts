import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import "dotenv/config";
import { User, UserModel } from "./model";

const app = express();
const PORT = 4000;

app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

mongoose.connect(process.env.MONGO_URL as string);

app.get("/test", (req, res) => {
  res.json("test ok");
});

app.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  const user = new User(name, email, password);
  UserModel.create(user);
  res.json(user);
});

app.listen(PORT, () => {
  console.log(`running on Port ${PORT}`);
});
