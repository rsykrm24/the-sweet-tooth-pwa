import { useState, useEffect } from "react"
import HelloUser from "../components/dashboard/HelloUser.jsx"
import Search from "../components/dashboard/Search.jsx"
import Card from "../components/dashboard/Card.jsx"
import Category from "../components/dashboard/Category.jsx"
import axios from "axios"
import All from "../assets/nY9pZEspe728e0triCmUHGELG5vfffoqEumy0BBvdSiHe5h5E.jpg"
import Cake from "../assets/KEb33vF4fqWGUyaj6qIP3Xo3PjI3zeYJlVmVRPaDpWLboHmTA.jpg"
import Cookies from "../assets/qShRixJoR7YvL5FWZmWzCDsryZoNkv1t9EGsWLmAzlML6h5E.jpg"
import Bread from "../assets/aIdciyLBHKLUJVFWbctM7Tz2PSiF8fMabv1gCvtqvDoE0DzJA.jpg"
import { useNavigate } from "react-router-dom"

export default function Dashboard() {
  let [input, setInput] = useState("")
  let [data, setData] = useState("loading")
  let [all, setAll] = useState(0)
  let [cookies, setCookies] = useState(0)
  let [bread, setBread] = useState(0)
  let [cake, setCake] = useState(0)
  let [alertInput, setAlertInput] = useState(false)
  let [dataUser,setDataUser] = useState("")
  let route = useNavigate()
  
  function submit(e) {
    e.preventDefault()
    if(input == "") {
      setAlertInput(true)
    }
    else {
      setAlertInput(false)
      setData("loading")
      axios.get(`http://localhost:3000/bakery/search/${input}`)
      .then(res => setData(res.data.data))
      .catch(err => setData([]))
    }
    setInput('')
  }
  function funcCookies() {
    setCookies(2)
    setBread(0)
    setCake(0)
    setAll(0)
    setData("loading")
    axios.get("http://localhost:3000/bakery/category/cookies")
    .then(res => setData(res.data.data))
    .catch(err => setData([]))
  }
  function funcCake() {
    setCookies(0)
    setBread(0)
    setCake(2)
    setAll(0)
    setData("loading")
    axios.get("http://localhost:3000/bakery/category/cake")
    .then(res => setData(res.data.data))
    .catch(err => setData([]))
  }
  function funcBread() {
    setCookies(0)
    setBread(2)
    setCake(0)
    setAll(0)
    setData("loading")
    axios.get("http://localhost:3000/bakery/category/bread")
    .then(res => setData(res.data.data))
    .catch(err => setData([]))
  }
  function funcAll() {
    setCookies(0)
    setBread(0)
    setCake(0)
    setAll(2)
    setData("loading")
    axios.get("http://localhost:3000/bakery")
    .then(res => setData(res.data.data))
    .catch(err => setData([]))
  }
  useEffect(() => {
    if(localStorage.getItem("data") == null) {
      route("/login")
    }
    else {
      setDataUser(JSON.parse(localStorage.getItem("data")))
      axios.get("http://localhost:3000/bakery")
      .then(res => {
        setData(res.data.data)
        setAll(2)
      })
      .catch(err => setData([]))
      }
  },[])
  return (
    <div className="bg-orange-900">
      <HelloUser user={dataUser.name}/>
      <div className="rounded-t-xl bg-white p-2">
        <Search value={input} change={e => setInput(e.target.value)} func={submit}/>
        {
          (alertInput) ? 
          <div className="bg-red-600 rounded mt-3">
            <h1 className="text-lg font-bold text-white font-[Nunito] p-1">Masukkan Input</h1>
          </div> : <div></div>
        }
        <div className="flex gap-4 mt-4">
          <Category title={"All"} image={All} brightness={`border-${all}`} func={funcAll}/>
          <Category title={"Cake"} image={Cake} brightness={`border-${cake}`} func={funcCake}/>
          <Category title={"Bread"} image={Bread} brightness={`border-${bread}`} func={funcBread}/>
          <Category title={"Cookies"} image={Cookies} brightness={`border-${cookies}`} func={funcCookies}/>
        </div>
        <div className="grid grid-cols-2 gap-3 mt-4">
        {
          (data  == "loading") ? <h1 className="text-3xl text-orange-900 font-[Nunito] font-bold">Loading...</h1> : (data.length > 0) ? data.map(data => <Card image={data.image} title={data.title} price={parseInt(data.price.split("").filter(data => data!= "$").join(""))*1000} id={data.id}/>) : <h1 className="text-3xl text-orange-900 font-[Nunito] font-bold">Pencarian tidak ditemukan</h1>
        }
        </div>
      </div> 
    </div>
    )
}