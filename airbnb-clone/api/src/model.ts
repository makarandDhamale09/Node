import mongoose, { Schema, Document } from "mongoose";
import bcrypt from "bcrypt";

export class User {
  name: string;
  email: string;
  password: string;

  constructor(name: string, email: string, password: string) {
    this.name = name;
    this.email = email;
    this.password = this.encryptPassword(password);
  }

  private encryptPassword(plainPassword: string): string {
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds); // Generate a salt
    return bcrypt.hashSync(plainPassword, salt); // Hash the password
  }
}

const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true },
  password: String,
});

export const UserModel = mongoose.model("User", UserSchema);
