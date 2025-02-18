import mongoose, { Schema } from "mongoose";


const imageSchema = new Schema({
  imageUrl: { type: String, required: true },
});

export default mongoose.model("Image", imageSchema);
