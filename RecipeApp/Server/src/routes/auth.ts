import express, { Request, Response } from "express";
import User from "../models/User";
import bcrypt from "bcrypt";
import crypto from "crypto";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";
import { generateCode } from "../utils/generateCode";

const router = express.Router();

router.post("/register", async (req: Request, res: Response): Promise<any> => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required!" });
    }

    const isExistingUser = await User.findOne({ email });

    if (isExistingUser) {
      return res.status(400).json({
        message:
          "User already exists with same email! Please try with a different email",
      });
    }
    const hashPassword = await bcrypt.hash(password, 12);
    const newUser = new User({ email, password: hashPassword });
    await newUser.save();
    return res
      .status(201)
      .json({ success: true, message: "User created successfully" });
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      success: false,
      message: "Something went wrong! Please try again",
    });
  }
});

router.post("/login", async (req: Request, res: Response): Promise<any> => {
  try {
    const { email, password } = req.body;

    // check user exist
    const currentUser = await User.findOne({ email });
    if (!currentUser) {
      return res.status(400).json({
        success: false,
        message: "Invalid Credentails",
      });
    }

    const isPasswordMatch = await bcrypt.compare(
      password,
      currentUser.password
    );
    if (!isPasswordMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid Password",
      });
    }

    const token = jwt.sign(
      {
        userId: currentUser._id,
      },
      "JWT_SECRET"
      // { expiresIn: "1h" }
    );

    return res.status(200).json({
      success: true,
      token,
      userId: currentUser._id,
      message: "LogIn successfully",
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      success: false,
      message: "Something went wrong! Please try again",
    });
  }
});

router.post("/forget-password", async (req, res): Promise<any> => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ message: "Email is required!" });
  }
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ message: "No user found with this email!" });
    }

    // random number
    const code = generateCode();
    user.resetPasswordToken = code;
    user.resetPasswordExpires = new Date(Date.now() + 3600000);

    await user.save();

    // Send email with Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "work.prathamdeveloper@gmail.com",
        pass: "quvg kceg tqvw jlct",
      },
    });

    const mailOptions = {
      to: email,
      from: "work.prathamdeveloper@gmail.com",
      subject: "Password Reset",
      text: `You requested a password reset. Your password reset code is: ${code}`,
    };

    await transporter.sendMail(mailOptions);
    return res
      .status(200)
      .json({ message: "Password reset code sent to your email." });
  } catch (e) {
    console.log("==> Forget Password Err", e);
    return res
      .status(500)
      .json({ message: "Something went wrong, please try again!" });
  }
});

router.post("/reset-password", async (req, res): Promise<any> => {
  const { email, code, newPassword } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Invalid or expired token!" });
    }
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User not found.",
      });
    }
    if (user.resetPasswordToken !== code) {
      return res.status(400).json({
        success: false,
        message: "Invalid reset code.",
      });
    }
    if (!user.resetPasswordExpires) {
      return res.status(400).json({
        success: false,
        message: "Password reset token not found.",
      });
    }
    if (user.resetPasswordExpires < new Date()) {
      return res.status(400).json({
        success: false,
        message: "Reset code has expired.",
      });
    }

    // Hash the new password and update the user document
    const hashedPassword = await bcrypt.hash(newPassword, 12);
    user.password = hashedPassword;
    user.resetPasswordToken = undefined; 
    user.resetPasswordExpires = undefined;

    await user.save();
    return res
      .status(200)
      .json({
        success : true,
         message: "Password has been reset successfully!" });
  } catch (e) {
    console.log("==> Reset Err", e);

    return res
      .status(500)
      .json({ message: "Something went wrong, please try again!" });
  }
});
export default router;
