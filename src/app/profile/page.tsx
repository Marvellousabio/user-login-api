import React from 'react'
import {getSession} from "@/action";
import {redirect} from "next/navigation";

const page = async() => {
  const session=await getSession();

  if(!session.isLoggedIn){
    redirect("/")
  }
  return (
    <div className='profile'>
      <h1>Welcome to the ProfilePage</h1>
      <p>
        Welcome <a>{session.username}</a>
      </p>
      <span>You are to <a>{session.isPro?"premium":"free"}</a></span>
    </div>
  )
}

export default page