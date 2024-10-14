import LoginForm from "../components/login/LoginForm.jsx"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function Login() {
  let route = useNavigate()
  let [email,setEmail] = useState("")
  let [password, setPassword] = useState("")
  function submit(e) {
    e.preventDefault()
    if(email != "" || password != "") {
      route("/home")
    }
  }
  return(
    <div className="h-screen">
      <div className="p-3 rounded-b-xl bg-orange-900 h-1/6 flex items-center">
        <h1 className="font-[Nunito] text-2xl font-bold text-white">Let's get you signed in!</h1>
      </div>
      <div className="bg-white p-2">
        <LoginForm email={email} emailChange={e => setEmail(e.target.value)} password={password} passwordChange={e => setPassword(e.target.value)} submit={submit} />
      </div>
      <div className="mt-7 font-[Nunito]">
        <p className="text-center">Don't have an account ? Register <span className="text-orange-900" onClick={() => route("/register")}>here</span></p>
      </div>
    </div>
    )
}