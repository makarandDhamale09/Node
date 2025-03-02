import { Request, Response } from "express";
import "dotenv/config";
import { UserDocument, UserModel } from "../model";
import { User } from "../schema";
import { comparePassword } from "../utils";
import { signJWT } from "../jwt";

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const userDetails: UserDocument | null = await User.findOne({ email });

  if (userDetails) {
    const passOk = await comparePassword(password, userDetails.password);

    if (passOk) {
      const token = signJWT(userDetails);
      res
        .cookie("token", token)
        .json({ name: userDetails.name, email: userDetails.email });
    } else {
      res.status(422).json("Pass not ok");
    }
  } else {
    res.status(404).json("Not found");
  }
};

export const register = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    const user = new UserModel(name, email, password);
    await User.create(user);
    res.json(user);
  } catch (e) {
    console.log("Error : ", e);
    res.status(422).json(e);
  }
};
