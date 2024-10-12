import { useNavigate } from "react-router-dom"

export default function Loading() {
  let route = useNavigate()
  setTimeout(() => route("/dashboard"),1000)
  return (
    <div className="h-screen bg-orange-900 flex justify-center items-center">
      <h1 className="font-bold text-white text-3xl font-[Pacifico]">The Sweet Tooth</h1>
    </div>
    )
}