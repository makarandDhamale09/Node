import { encryptPassword } from "./utils";

export class UserModel {
  name: string;
  email: string;
  password: string;

  constructor(name: string, email: string, password: string) {
    this.name = name;
    this.email = email;
    this.password = encryptPassword(password);
  }
}

export interface UserDocument extends Document {
  _id: string;
  name: string;
  email: string;
  password: string;
}
