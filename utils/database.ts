import mongoose, { ConnectOptions } from "mongoose";

interface optionProps {
  dbName: string;
  useNewUrlParser: boolean;
  useUnifiedTopology: boolean;
}

let isConnected = false;

export const connectToDB = async (): Promise<void> => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("mongoDB is alredy connected");
    return;
  }
  try {
    const mongoURI = process.env.MONGODB_URI;
    if (!mongoURI) {
      throw new Error("MongoDB URI is not defined");
    }

    const options: optionProps = {
      dbName: "share_prompt",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    await mongoose.connect(mongoURI, options);

    isConnected = true;
    console.log("mongoDB connected");
  } catch (error) {
    console.log(error);
  }
};
