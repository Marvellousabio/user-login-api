"use server";
import { sessionOptions, SessionData, defaultSession } from "@/lib";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";

let username = "john";
let isPro = true;

export const getSession = async () => {
    const session = await getIronSession<SessionData>(cookies(), sessionOptions);

    if (!session.isLoggedIn) {
        session.isLoggedIn = defaultSession.isLoggedIn;
    }

    return session;
};

export const login = async (prevState:(error:undefined ||string), formData: FormData) => {
    const session = await getSession();

    const formUsername = formData.get("username") as string;
    const formPassword = formData.get("password") as string;

    if (formUsername !== username) {
        return { error: "wrong Credentials" };
    }

    session.userId = "1";
    session.username = formUsername;
    session.isPro = isPro;
    session.isLoggedIn=true;

    await session.save(); // Make sure to persist the session
    redirect("/")

    return { success: true };
};

export const logout = async () => {
    const session = await getSession();
     session.destroy(); // Properly logs the user out
     redirect("/");
};
