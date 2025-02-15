import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    const connection = await mongoose.connect(
      process.env.MONGODB_URL as string
    );
    console.log(`MongoDB Connected as ${connection.connection.host}`);
  } catch (e) {
    console.error(e);
    process.exit();
  }
};

export default connectToDB;
