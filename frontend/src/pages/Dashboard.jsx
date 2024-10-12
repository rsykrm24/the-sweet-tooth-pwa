import { useState, useEffect } from "react"
import HelloUser from "../components/dashboard/HelloUser.jsx"
import Search from "../components/dashboard/Search.jsx"

export default function Dashboard() {
  let [input, setInput] = useState("")
  function submit(e) {
    e.preventDefault()
    if(input == "") {
      alert("Masukkan input")
    }
    else {
      alert(input)
      setInput("")
    }
  }
  return (
    <div className="bg-orange-900">
      <HelloUser user={"Ahmeng"}/>
      <div className="rounded-t-xl bg-white p-2">
        <Search value={input} change={e => setInput(e.target.value)} func={submit}/>
        <div>category</div>
        <div>menu</div>
      </div> 
    </div>
    )
}