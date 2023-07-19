import mongoose from "mongoose"

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL).then(()=>console.log("connected to mongodb"));

    } catch (error) {
        throw new Error("connection filaed")
        
    }
}
export default connect