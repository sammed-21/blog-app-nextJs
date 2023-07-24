import mongoose from "mongoose"
  
export const connect = async () => {
    mongoose.set('strictQuery', true);
    try {
        await mongoose.connect(process.env.MONGO_URL).then(()=>console.log("connected to mongodb"));

    } catch (error) {
        throw new Error("connection filaed")
        
    }
}