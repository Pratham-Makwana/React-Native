import mongoose, { Schema } from "mongoose";

export interface IUser {
  email: string;
  password: string;
  resetPasswordToken?: string; // Store reset token
  resetPasswordExpires?: Date; // Store the token expiration time
}

const UserSchema = new Schema<IUser>({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    unique: true,
  },
  resetPasswordToken: String,
  resetPasswordExpires: Date,
});

export default mongoose.model("User", UserSchema);
