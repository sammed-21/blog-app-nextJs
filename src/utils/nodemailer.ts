

import nodemailer from "nodemailer"
const email = process.env.EMAIL;
const password = process.env.EMAIL_PASS

export const transporter = nodemailer.createTransport({
    service:"gmail",
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: email,
      pass: password
    }
});
  
export const mailOptions = {
    form: email,
    to : email

    
}