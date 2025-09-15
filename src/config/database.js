import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()

const url = process.env.database_url

const conenctionOptions = {
  // serverSelectionTimeoutMS: 5000,
};

mongoose
  .connect(url, conenctionOptions)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.error("MongoDB Connection Error: ", err);
  });

export default mongoose.connection;
