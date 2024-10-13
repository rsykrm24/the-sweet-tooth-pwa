import { useNavigate } from "react-router-dom"

export default function Card(props) {
  let route = useNavigate()
  return(
    <button className="border-2 border-orange-900 rounded p-3" onClick={() => route(`/bakery/${props.id}`)}>
      <img src={props.image} className="aspect-square object-contain rounded" />
      <h1 className="text-orange-900 font-[Nunito] truncate">{props.title}</h1>
      <h1 className="text-orange-900 font-[Nunito] text-xl font-bold text-left">Rp. {props.price}</h1>
    </button>
    )
}