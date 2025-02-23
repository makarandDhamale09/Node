import bcrypt from "bcrypt";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { UserModel } from "./model";
import { User } from "./schema";
import { expressApplication, mongoConnection } from "./config";

mongoConnection();
const app = expressApplication;
const jwtSecret = "BNArGWgKmUDcwQSZvkNJLjxKLfEaFe";

app.get("/test", (req, res) => {
  res.json("test ok");
});

app.post("/register", async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    const user = new UserModel(name, email, password);
    const savedUser = await User.create(user);
    console.log("User saved : ", savedUser);
    res.json(user);
  } catch (e) {
    console.log("Error : ", e);
    res.status(422).json(e);
  }
});

app.post("/login", async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const userDetails = await User.findOne({ email });
  if (userDetails) {
    const passOk = await bcrypt.compare(
      password,
      userDetails.password as string
    );
    if (passOk) {
      const token = jwt.sign(
        { email: userDetails.email, id: userDetails._id },
        jwtSecret
      );
      res.cookie("token", token).json("Pass ok");
    } else {
      res.status(422).json("Pass not ok");
    }
  } else {
    res.status(404).json("Not found");
  }
});
