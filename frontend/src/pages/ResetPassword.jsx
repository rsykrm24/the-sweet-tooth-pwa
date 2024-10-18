import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

export default function ResetPassword() {
  let route = useNavigate()
  let [email,setEmail] = useState("")
  let [password, setPassword] = useState("")
  let [retype, setRetype] = useState("")
  let [user, setUser] = useState(true)
  let [top, setTop] = useState("top-[-1000px]")
  useEffect(() => {
    setEmail(localStorage.getItem("email"))
  },[])
  function submit(e) {
    e.preventDefault()
    setUser(true)
    setTimeout(() => {
      if(password != retype || password == "") {
        setUser(false)
      }
      else {
        axios.put("http://localhost:3000/updatepassword",{
        email:email,
        password:window.btoa(password)
        })
        .then(res => {
          localStorage.removeItem("email")
          setTop("top-10")
        })
        .catch(err => setUser(false))
      }
    },1000)
  }
  return(
    <div className="h-screen">
      <div className="p-3 rounded-b-xl bg-orange-900 h-1/6 flex items-center">
        <h1 className="font-[Nunito] text-2xl font-bold text-white">Reset password</h1>
      </div>
      <div className="bg-white p-2 mt-10">
        {(user) ? <div></div> :         <div className="bg-red-300 rounded text-red-600 py-1 px-2">Password tidak sesuai</div>}
        <div className={`font-[Nunito] w-[95%] border-4 border-orange-900 rounded flex flex-col items-center bg-white fixed h-5/6 p-4 justify-evenly duration-1000 ${top}`}>
          <h1 className="text-2xl">Reset Password berhasil</h1>
          <button className="bg-orange-900 font-bold rounded text-white w-full py-2" onClick={() => route("/login")}>Back</button>
        </div>
        <form className="flex flex-col gap-7 mt-5">
          <input type="password" placeholder="Password" className={`border-2 border-orange-900 outline-0 py-1 px-2 rounded w-full`} value={password} onChange={e => setPassword(e.target.value)}/>
          <input type="password" placeholder="Re-type password" className={`border-2 border-orange-900 outline-0 py-1 px-2 rounded w-full`} value={retype} onChange={e => setRetype(e.target.value)}/>
          <button type="submit" className="py-1 px-2 rounded font-[Nunito] bg-orange-900 text-bold text-white w-full font-bold" onClick={submit}>Next</button>
        </form>
      </div>
      <div className="mt-7 font-[Nunito]">
        <p className="text-center">Don't have an account ? Register <span className="text-orange-900" onClick={() => route("/register")}>here</span></p>
      </div>
    </div>
    )
}