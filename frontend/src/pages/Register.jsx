import RegisterForm from "../components/register/RegisterForm.jsx"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"

export default function Register() {
  let route = useNavigate()
  let [email,setEmail] = useState("")
  let [password, setPassword] = useState("")
  let [name, setName] = useState("")
  let [retype, setRetype] = useState("")
  let [emailExist, setEmailExist] = useState(false)
  
  function submit(e) {
    e.preventDefault()
    axios.post("http://localhost:3000/register",{
      name:name, 
      email:window.btoa(email),
      password:window.btoa(password),
      cart:""
    })
    .then(res => route("/login"))
    .catch(err => {
      if(err.response.data.message == "Email telah terdaftar") {
        setEmailExist(true)
      }
    })
  }
  return(
    <div className="h-screen">
      <div className="p-3 rounded-b-xl bg-orange-900 h-1/6 flex items-center">
        <h1 className="font-[Nunito] text-2xl font-bold text-white">Let's get you registered!</h1>
      </div>
      <div className="bg-white p-2">
      {
        emailExist ? <div className="text-red-600 bg-red-300 font-[Nunito] rounded p-2 mt-5">Email telah terdaftar</div> : <div></div>
      }
        <RegisterForm email={email} emailChange={e => setEmail(e.target.value)} password={password} passwordChange={e => setPassword(e.target.value)} submit={submit} name={name} nameChange={e => setName(e.target.value)} retype={retype} retypeChange={e => setRetype(e.target.value)}/>
      </div>
      <div className="mt-7 font-[Nunito]">
        <p className="text-center">Have an account ? Sign in <span className="text-orange-900" onClick={() => route("/login")}>here</span></p>
      </div>
    </div>
    )
}