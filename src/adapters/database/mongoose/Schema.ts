import mongoose from "mongoose";
import { User } from "../../../entities/User";
const userModel = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);
export default mongoose.model<User>("User", userModel);