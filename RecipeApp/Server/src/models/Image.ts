import mongoose, { Schema } from "mongoose";

// const imageSchema = new Schema({
//   imageUrl: { type: String, required: true },

// });
const ImageSchema = new mongoose.Schema({
  url: { type: String, required: true },
  public_id: { type: String, required: true },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Image", ImageSchema);
