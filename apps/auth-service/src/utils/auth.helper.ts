import crypto from 'crypto';
import { ValidationError } from '../../../../packages/error-handler';
import redis from '../../../../packages/libs/redis';
import { sendEmail } from '../../../../apps/auth-service/src/utils/send-email';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const validateRegistrationData=(data:any,userType:"user"|"seller")=>{
    const{email,name,password,phone_number,country}=data;
    if(!email||!name||!password||(userType==="seller"&&(!phone_number||!country))){
        throw new ValidationError(`Missing required fields `);
    }
    if(!emailRegex.test(email)){
        throw new ValidationError(`Invalid email format`);
    }

}

export const checkOtpRestrictions=async (email:string,next:Function)=>{

if(await redis.get(`otp:${email}`)){

}
}
export const sendOtp= async(email:string,name:string,templateName:string)=>{
    const otp =crypto.randomInt(100000,999999).toString();
   await  sendEmail(email,"OTP Verification for Registration",templateName,{name,otp});




}