import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

export default function ForgotPassword() {
  let route = useNavigate()
  let [email,setEmail] = useState("")
  let [user, setUser] = useState(false)
  
  function submit(e) {
    e.preventDefault()
    axios.post("http://localhost:3000/getUser",{
      email:window.btoa(email)
    })
    .then(res => {
      route("/resetpassword")
      localStorage.setItem("email",window.btoa(email))
    })
    .catch(err => setUser(true))
  }
  return(
    <div className="h-screen">
      <div className="p-3 rounded-b-xl bg-orange-900 h-1/6 flex items-center">
        <h1 className="font-[Nunito] text-2xl font-bold text-white">Forgot password</h1>
      </div>
      <div className="bg-white p-2 mt-10">
        {(!user) ? <div></div> :         <div className="bg-red-300 rounded text-red-600 py-1 px-2">Email tidak ditemukan</div>}
        <form className="flex flex-col gap-7 mt-5">
          <input type="email" placeholder="Email" className={`border-2 border-orange-900 outline-0 py-1 px-2 rounded w-full`} value={email} onChange={e => setEmail(e.target.value)}/>
          <button type="submit" className="py-1 px-2 rounded font-[Nunito] bg-orange-900 text-bold text-white w-full font-bold" onClick={submit}>Next</button>
        </form>
      </div>
      <div className="mt-7 font-[Nunito]">
        <p className="text-center">Don't have an account ? Register <span className="text-orange-900" onClick={() => route("/register")}>here</span></p>
      </div>
    </div>
    )
}