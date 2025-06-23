import { getSession } from "@/action";

const Homepage=async()=>{
  const session=await getSession();
  return (
    <div className='profile'>
      <h1>Welcome to the profile Page</h1>
      <p>Welcome {session.username}</p>
    </div>
  )
}

export default Homepage