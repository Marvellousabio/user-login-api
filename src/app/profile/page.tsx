import React from 'react'
import {changePremium, changeUsername, getSession} from "@/action";
import {redirect} from "next/navigation";

const ProfilePage = async() => {
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
      <span>You are a <b>{session.isPro?"Premium":"Free"}</b> Users</span>
      <form action={changePremium}>
        <button>{session.isPro ?"Cancel":"Buy"} premium</button>
      </form>

      <form action={changeUsername}>
        <input type='text' name='username' required placeholder={session.username} />
        <button>Update</button>
      </form>
    </div>
  );
};

export default ProfilePage;