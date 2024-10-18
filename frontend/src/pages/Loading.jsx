import { useNavigate } from "react-router-dom"
import axios from "axios"

export default function Loading() {
  let route = useNavigate()
  let data = JSON.parse(localStorage.getItem("data")) || null
  setTimeout(() => {
    axios.post("http://localhost:3000/login",{
      email:data?.email, 
      password:data?.password
    })
    .then(res => route("/home"))
    .catch(err => route("/login"))
  },5000)
  return (
    <div className="h-screen bg-orange-900 flex justify-center items-center">
      <h1 className="font-bold text-white text-3xl font-[Pacifico]">The Sweet Tooth</h1>
    </div>
    )
}