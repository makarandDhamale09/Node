import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { UserDocument, UserModel } from "./model";
import { User } from "./schema";
import { expressApplication, mongoConnection } from "./config";
import { comparePassword } from "./utils";
import { signJWT } from "./jwt";

mongoConnection();
const app = expressApplication;

app.get("/test", (req, res) => {
  res.json("test ok");
});

app.post("/register", async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    const user = new UserModel(name, email, password);
    await User.create(user);
    res.json(user);
  } catch (e) {
    console.log("Error : ", e);
    res.status(422).json(e);
  }
});

app.post("/login", async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const userDetails: UserDocument | null = await User.findOne({ email });

  if (userDetails) {
    const passOk = await comparePassword(password, userDetails.password);

    if (passOk) {
      const token = signJWT(userDetails);
      res.cookie("token", token).json("Pass ok");
    } else {
      res.status(422).json("Pass not ok");
    }
  } else {
    res.status(404).json("Not found");
  }
});
