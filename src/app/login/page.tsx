import LoginForm from "@/components/login"
import { getSession } from "@/action"
import { redirect } from "next/navigation"


const LoginPage = async() => {
  const session=await getSession()
  
  if (session.isLoggedIn){
    redirect("/")
  }
  return (
    <div className="login">
      <h1>Welcome to the LoginPage</h1>
      <LoginForm/>
    </div>
  )
}

export default LoginPage