import express, { Request, Response } from "express";
import multer from "multer";
import Image from "../models/Image";
import { uploadOnCloudinary } from "../utils/cloudinary";

const router = express.Router();

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "./public/temp");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

router.get("/getimages", async (req, res) => {
  try {
    const result = await Image.find({});
    res.json({
      success: true,
      images: result,
    });
  } catch (e) {
    console.log("==> fetch Images Error", e);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});


router.post(
  "/upload",
  upload.single("image"),
  async (req: Request, res: Response): Promise<any> => {
    console.log("==> upload called");

    try {
      if (!req.file) {
        return res.status(400).json({ message: "No file uploaded." });
      }
      console.log("==> req", req.file);

      const result = await uploadOnCloudinary(req.file?.path);

      if (!result) {
        return res
          .status(500)
          .json({ message: "Error uploading image to Cloudinary" });
      }
      console.log("==> Result", result);
      const image = new Image({
        url: result?.secure_url,
        public_id: result?.public_id,
      });
      await image.save();

      return res.status(200).json({
        success: true,
        message: "Image uploaded successfully",
        image: {
          url: result.secure_url,
          public_id: result.public_id,
        },
      });
    } catch (e) {
      console.log("==> Image Upload Error", e);
      return res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  }
);

export default router;
