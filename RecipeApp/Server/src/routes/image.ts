import express, { Request, Response } from "express";
import multer from "multer";
import path from "path";
import Image from "../models/Image";

const router = express.Router();

// const storage = multer.diskStorage({
//   destination(req, file, cb) {
//     cb(null, "upload/");
//   },
//   filename: (req, file, cb) => {
//     const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
//     cb(
//       null,
//       file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
//     );
//   },
// });

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.get('/test', (req, res) => {
  res.json({
    message : 'data'
  })
})
router.post(
  "/upload",
  upload.single("image"),
  async (req: Request, res: Response): Promise<any> => {
    console.log("==> called");
    
    try {
      console.log("==> req", req.file);
      const file = req.file;
    
      
      if (!file) {
        return res.status(400).json({
          success: false,
          message: "No file uploaded",
        });
      }
      console.log("==> image", req.file);

      const image = new Image({
        imageUrl: file?.buffer.toString('base64'),
      });
      console.log("==> Image Backend", image);
      
      await image.save();
      
   
      return res.status(201).json({
        success: true,
        message: "Image uploaded successfully",
        imageUrl: image,
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

export default router