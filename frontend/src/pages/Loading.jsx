import { useNavigate } from "react-router-dom"

export default function Loading() {
  let route = useNavigate()
  let data = JSON.parse(localStorage.getItem("data"))
  setTimeout(() => {
    if(data.email && data.password && data.name && data.cart) {
      route("/home")
    }
    else {
      route("/login")
    }
  },7000)
  return (
    <div className="h-screen bg-orange-900 flex justify-center items-center">
      <h1 className="font-bold text-white text-3xl font-[Pacifico]">The Sweet Tooth</h1>
    </div>
    )
}