import React from 'react'
import {getSession} from "@/action";
const page = ansyc () => {

  const session= await getSession();
  return (
    <div className='profile'>
      <h1>Welcome to the profile Page</h1>
      <p>Welcome , <a>{session.username}</a></p>
    </div>
  )
}

export default page