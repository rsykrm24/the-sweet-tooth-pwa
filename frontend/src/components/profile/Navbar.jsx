import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom"

export default function Navbar() {
  const route = useNavigate()
  return(
    <div className="flex items-center gap-3 bg-orange-900 p-4">
      <button onClick={() => route("/home")}>
        <ArrowBackIcon style={{color:"white"}}/>
      </button>
      <h1 className="text-2xl text-white font-[Nunito] font-bold">Profile</h1>
    </div>
    )
}