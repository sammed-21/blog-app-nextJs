// import mongoose from "mongoose"
  
// export const connect = async () => {
//     mongoose.set('strictQuery', true);
//     try {
//         await mongoose.connect(process.env.MONGO_URL!).then(()=>console.log("connected to mongodb"));

//     } catch (error) {
//         throw new Error("connection filaed")
        
//     }
// }
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

