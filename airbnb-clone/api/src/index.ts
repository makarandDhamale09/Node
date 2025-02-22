import express from "express";
import cors from "cors";
import { RegisterRequest } from "./model";

const app = express();
const PORT = 4000;

app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

app.get("/test", (req, res) => {
  res.json("test ok");
});

app.post("/register", (req, res) => {
  const request: RegisterRequest = req.body;
  res.json(request);
});

app.listen(PORT, () => {
  console.log(`running on Port ${PORT}`);
});
