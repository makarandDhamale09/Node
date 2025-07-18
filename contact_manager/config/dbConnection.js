import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(
      "MongoDB connected:",
      connection.connection.host,
      connection.connection.port,
      connection.connection.name
    );
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    console.error(error);
    process.exit(1);
  }
};
