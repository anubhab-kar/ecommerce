import ejs from "ejs";
import path from "path";
import nodemailer from "nodemailer";

export const sendEmail = async (to: string, subject: string, templateName: string, data: any) => {
  
 try{
   const html: string = await ejs.renderFile(
  path.join(
    process.cwd(), 
    'apps', 
    'auth-service', 
    'src', 
    'utils', 
    'email-templates', 
    `${templateName}.ejs`
  ),
  data
);

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),  // MUST convert to number
  secure: Number(process.env.SMTP_PORT) === 465, 
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  }});

   transporter.sendMail({
    from: process.env.SMTP_USER,
    to,
    subject,
    html,
  });



 return true;
}
 
   catch (error) {
    console.error("EMAIL ERROR:", error);
    return false;
  }

};


