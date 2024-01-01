import { mailOptions, transporter } from "../../../utils/nodemailer";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  try {
    const reqBody = await request.json();
    const { userForm } = reqBody;
    const { name, email, message } = userForm;
    if (!name || !email || !message) {
      return NextResponse.json({
        message: "this is error in field input",
        error: true,
      });
    }

   
    // console.log(email);
    try {
      await transporter.sendMail({
        ...mailOptions,
        subject: "contact form blog application",
        html: `
                <div>        
                <h1 style="color: black;">Name: ${name}</h1>
                <a href="" style="color:blue">Email: ${email}</a>
                <p style="color:black">Message: ${message}</p>
            </div>
                `,
      });
    
    } catch (err: any) {
      console.log(err.message);
      return NextResponse.json({
        message: "Error in form submission",
        success: false,
      });
    }
    //
    return NextResponse.json({
      message: "successfully send the submit button",
      success: true,
    });
  } catch (error: any) {
    console.log(error.message);
    return NextResponse.json({
      message: "Error in form submission",
      error: true,
    });
  }
};