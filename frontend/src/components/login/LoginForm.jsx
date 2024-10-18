import VisibilityIcon from '@mui/icons-material/Visibility';
import { grey } from "@mui/material/colors"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function LoginForm(props) {
  let route = useNavigate()
  let [tipe, setTipe] = useState("password")
  function typing(e) {
    e.preventDefault()
    if(tipe=="password") {
      setTipe("text")
    }
    else {
      setTipe("password")
    }
  }
  return (
    <form className="flex flex-col gap-9 mt-5" onSubmit={props.submit}>
      <input type="email" placeholder="Email" className={`border-2 border-orange-900 outline-0 py-1 px-2 rounded w-full`} value={props.email} onChange={props.emailChange}/>
      <div className={`flex border-2 border-orange-900 rounded px-2 py-1`}>
          <input type={tipe} placeholder="Password" className="outline-0 w-full" value={props.password} onChange={props.passwordChange}/>
          <button onClick={typing}>
            <VisibilityIcon sx={{color:grey[400]}}/>
          </button>
        </div>
      <div className="flex justify-end">
        <span className="font-[Nunito] text-orange-900" onClick={() => route("/forgotpassword")}>Forgot password</span>
      </div>
      <button type="submit" className={`bg-orange-900 py-1 text-white rounded font-[Nunito] font-bold border-2 border-orange-900`}>Sign In</button>
    </form>
    )
}