import { useNavigate } from "react-router-dom"

export default function RegisterSuccess(props) {
  let route = useNavigate()
  return(
    <div className={`font-[Nunito] w-[95%] border-4 border-orange-900 rounded flex flex-col items-center bg-white fixed h-5/6 p-4 justify-evenly duration-1000 left-2 ${props.topClass}`}>
      <h1 className="text-2xl">Register berhasil</h1>
      <button className="bg-orange-900 font-bold rounded text-white w-full py-2" onClick={() => route("/login")}>Back</button>
    </div>
    )
}