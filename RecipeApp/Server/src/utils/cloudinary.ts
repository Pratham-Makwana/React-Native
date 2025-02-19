import { v2 as cloudinary } from "cloudinary";

import fs from "fs";

cloudinary.config({
  // cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  // api_key: process.env.CLOUDINARY_API_KEY,
  // api_secret: process.env.CLOUDINARY_API_SECRET,
  cloud_name: "dktrynsnz",
  api_key: "432318966777388",
  api_secret: "ZmkdvjYYZut44wMsxd_B09_uRuk",
});

const uploadOnCloudinary = async (localFilePath: any) => {
  try {
    if (!localFilePath) return null;
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    // console.log("file is uploaded on cloudinary ", response.secure_url);
    fs.unlinkSync(localFilePath);
    return response;
  } catch (e) {
    console.log("==> Cloudinary Err", e);

    fs.unlinkSync(localFilePath);
    return null;
  }
};

export { uploadOnCloudinary };
