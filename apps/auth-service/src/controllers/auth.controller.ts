import { NextFunction,Request,Response } from "express";
import { sendOtp, validateRegistrationData } from "../utils/auth.helper";
import prisma from "../../../../packages/libs/prisma";
import { ValidationError } from "../../../../packages/error-handler";
export const userRegistration=async(req:Request,res:Response,next:NextFunction)=>{
    validateRegistrationData(req.body,"user");
    const{email,name,password}=req.body;

    const existingUsers= await prisma.users.findUnique({ where: { email }});
    if(existingUsers){
       throw next(new ValidationError("Email already in use"));

    }
  
    sendOtp(email,name,"user-registration-email");

}