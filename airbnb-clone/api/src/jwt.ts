import { UserDocument } from "./model";
import jwt from "jsonwebtoken";

const jwtSecret = "BNArGWgKmUDcwQSZvkNJLjxKLfEaFe";

export function signJWT(user: UserDocument): string {
  return jwt.sign(
    { name: user.name, email: user.email, id: user._id },
    jwtSecret
  );
}

export function verifyJWT(token: string) {
  return jwt.verify(token, jwtSecret);
}
