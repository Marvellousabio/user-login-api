import { SessionOptions } from "iron-session";

export interface SessionData {
  userId?: string;
  username?: string;
  img?: string;
  isPro: boolean;
  isLoggedIn: boolean;
}

export const defaultSession: SessionData = {
  isLoggedIn: false,
  isPro: false, // you forgot this field which is required by the interface
};

export const sessionOptions: SessionOptions = {
  password: process.env.SECRETE_API!,
  cookieName: "Lama-session",
  cookieOptions: {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  },
};
