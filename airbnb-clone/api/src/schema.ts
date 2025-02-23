import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true },
  password: String,
});

export const User = mongoose.model("User", UserSchema);
