import express, { Request, Response } from "express";
import User from "../models/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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
      "JWT_SECRET",
      { expiresIn: "1h" }
    );

    return res.status(200).json({
        success : true,
        token,
        userId : currentUser._id,
        message : 'LogIn successfully'
    })
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      success: false,
      message: "Something went wrong! Please try again",
    });
  }
});

export default router;
