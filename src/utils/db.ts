 
import mongoose from "mongoose";

let dbConnection: mongoose.Connection | null = null;

export async function connect() {
  if (!dbConnection) {
    await mongoose.connect(process.env.MONGO_URL! );

    dbConnection = mongoose.connection;
    console.log("Connected to mongodb");
  }
  return dbConnection;
}

