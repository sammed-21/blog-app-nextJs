import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import {connect} from "../../../../utils/db.ts";
 import bcrypt from "bcryptjs"
import User from "../../../../models/user.ts";  
import CredentialsProvider from "next-auth/providers/credentials";
const handler =NextAuth( {
  // Configure one or more authentication providers
  providers:[
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      async authorize(credentials) {
        await connect()
        try {
          const user = await User.findOne({email:credentials.email})
  
          if(user){
            //check password
            const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);
            
            if (isPasswordCorrect) {
              return user
            }
            else {
              throw new Error("Wrong credentials")
            }
  
          }
          else {
            throw new Error('User not found')
          }
        } catch (error) {
          throw new Error(error)
        }
      }
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
      
    }),
    // ...add more providers here
  ],
  pages: {
    error:"/dashboard/login"
  }
})

export {handler as GET , handler as POST}