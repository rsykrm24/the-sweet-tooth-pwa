import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from "react-router-dom"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function HelloUser(props) {
  let route = useNavigate()
  function submit() {
    route("/profile")
  }
  return (
    <div className="bg-orange-900 p-3 py-5 flex justify-between items-center">
      <h1 className="font-[Nunito] font-bold text-2xl text-white">Hello,  {props.user}</h1>
      <div className="flex items-center gap-3">
        <button><ShoppingCartIcon style={{color:"white"}}/></button>
        <button onClick={submit}><PersonIcon style={{color:"white"}}/></button>
      </div>
    </div>
    )
}