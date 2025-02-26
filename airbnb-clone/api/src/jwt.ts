import { UserDocument } from "./model";
import jwt from "jsonwebtoken";

const jwtSecret = "BNArGWgKmUDcwQSZvkNJLjxKLfEaFe";

export function signJWT(user: UserDocument): string {
  console.log(user._id);
  console.log(user.email);
  return jwt.sign({ email: user.email, id: user._id }, jwtSecret);
}
