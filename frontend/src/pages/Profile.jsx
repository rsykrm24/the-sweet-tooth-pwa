import Navbar from "../components/profile/Navbar.jsx"
import Bio from "../components/profile/Bio.jsx"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function Profile() {
  let [data, setData] = useState("")
  let route = useNavigate()
  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("data")))
  },[])
  function logout() {
    route("/login")
    localStorage.removeItem("data")
  }
  return(
    <div className="h-screen">
      <Navbar />
      <div className="flex justify-center h-2/3">
        <Bio name={data.name} email={window.atob((data.email == null) ? "" : data.email)}/>
      </div>
      <div className="w-full flex justify-center">
        <button className="bg-orange-900 font-bold text-xl font-[Nunito] text-white rounded py-1 px-10" onClick={logout}>Log out</button>
      </div>
    </div>
    )
}