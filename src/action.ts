"use server";

import { sessionOptions, SessionData, defaultSession } from "@/lib";
import { getIronSession } from "iron-session";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";


let username = "john";
let isPro = true;
let isBlocked = true;

export const getSession = async () => {
    const cookieStore = await cookies();
    const session = await getIronSession<SessionData>(cookieStore, sessionOptions);
    if (!session.isLoggedIn) {
        session.isLoggedIn = defaultSession.isLoggedIn;
    }

    session.isBlocked = isBlocked;
    session.isPro = isPro;
    return session;
};

export const login = async (
    prevState:{error:undefined | string},
     formData: FormData
    ) => {
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
};

export const logout = async () => {
    const session = await getSession();
     session.destroy(); // Properly logs the user out
     redirect("/");
};
export const changePremium = async () => {
    const session = await getSession();

    isPro = !session.isPro;
    session.isPro = isPro;
    
    await session.save();
    revalidatePath("/profile");
};

export const changeUsername= async (formData: FormData) => {
    const session = await getSession();
    const newUsername=formData.get("username") as string;

    username=newUsername;

    session.username = username;
    await session.save();
    revalidatePath("/profile");

}
