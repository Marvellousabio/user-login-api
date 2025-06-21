import {sessionOptions} from "iron-session";
export interface SessionData{
    userId?:string;
    username?:string;
    img?:string;
    isPro:boolean
}

export const sessionOptions:sessionOptions={
    password:process.env.SECRETE_API!,
    cookieName:"Lama-session",
    cookieOptions:{
        httpOnly:true,
        secure:process.env.NODE_ENV==="production"
    }
}