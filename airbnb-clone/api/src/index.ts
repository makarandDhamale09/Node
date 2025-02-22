import express from "express";
import cors from "cors";

const app = express();
const PORT = 4000;

app.use(cors());

app.get("/test", (req, res) => {
  res.json("test ok");
});

app.listen(PORT, () => {
  console.log(`running on Port ${PORT}`);
});
