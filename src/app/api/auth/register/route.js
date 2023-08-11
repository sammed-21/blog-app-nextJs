import {connect} from "../../../../utils/db.ts";
import { NextResponse } from "next/server";
// import User from "@/models/user.js";
import User from "../../../../models/User.ts";  
import bcrypt from "bcryptjs"
export const POST = async (request) => {
    const { name, email, password } = await request.json();
   await connect();

    const hashedPassword = await bcrypt.hash(password, 10);
// console.log("passed throuh post")
    const newUser = new User({
        name,
        email,
        password:hashedPassword
    })
    try {
        await newUser.save();
        return new NextResponse("user has been created", {
            status:201
        })
        
    } catch (error) {
        return new NextResponse(err.message, {
            status:500
        })
    }
}