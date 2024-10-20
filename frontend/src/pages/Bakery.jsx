import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import axios from "axios"
import { brown } from "@mui/material/colors"
import { useNavigate } from "react-router-dom"
import OrderBuyNow from "../components/bakery/OrderBuyNow.jsx"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function Bakery() {
  let route = useNavigate();
  let { id } = useParams();
  let [data, setData] = useState("loading");
  let [jumlah, setJumlah] = useState(1);
  let [buyNow, setBuyNow] = useState("bottom-[-1000px]");
  let [dataUser, setDataUser] = useState("")
  
  useEffect(() => {
    axios.get(`http://localhost:3000/bakery/${id}`)
      .then(res => setData(res.data.data))
      .catch(err => setData(err));
    setDataUser(JSON.parse(localStorage.getItem("data")))
  }, []);
  
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const toggleBuyNow = () => {
    setBuyNow(buyNow === "bottom-0" ? "bottom-[-1000px]" : "bottom-0");
  };
  
  const buyNowPayment = () => {
    axios.post("http://localhost:3000/payment",{
      name:window.atob(dataUser.name),
      id:Math.round(Math.random()*12000000),
      amount:parseInt(data.price?.split("").filter(data => data != "$").join("")) * 1000 * jumlah, 
      email:window.atob(dataUser.email)
    })
    .then(res => window.location.assign(res.data.data.redirect_url))
  }
  
  return (
    <div className="h-screen flex flex-col">
      {/* Sticky header */}
      <div className="bg-orange-900 p-4 sticky w-full z-30 top-0 ">
        <button onClick={() => (buyNow == "bottom-[-1000px]") ? route("/home") : ""}>
          <ArrowBackIcon sx={{color:brown[50]}} />
        </button>
      </div>
      
      {/* Main content area */}
      <div className="flex-grow overflow-auto px-2 mt-2">
        {
          (data === "loading") ? (
            <h1 className="text-3xl font-bold text-orange-900 font-[Nunito]">Loading...</h1>
          ) : (
            <div className="flex flex-col gap-2 relative">
              <img src={data.image} className="aspect-square object-contain" />
              <h1 className="text-3xl font-bold text-orange-900 font-[Nunito]">
                Rp. {(parseInt(data.price?.split("").filter(data => data !== "$").join("")) * 1000)}
              </h1>
              <h1 className="text-2xl font-[Nunito] text-orange-900">{data.title}</h1>
              <div className="font-[Nunito] flex gap-3 py-1">
                <p>Terjual 0</p>
                <p>5.0(0)</p>
              </div>
              <p className="font-[Nunito]">{data.description}</p>
            </div>
          )
        }
      </div>
      
      {/* Footer with buttons */}
      <div className="shadow-xl shadow-black p-4 sticky bottom-0 shadow bg-white flex justify-between font-[Nunito]">
        <button className="border-2 border-orange-900 rounded py-1 px-2 text-white bg-orange-900 font-bold w-full" onClick={toggleBuyNow}>
          Buy Now
        </button>
      </div>

      {/* OrderBuyNow component */}
      {<OrderBuyNow image={data.image} title={data.title} price={numberWithCommas(parseInt(data.price?.split("").filter(data => data != "$").join("")) * 1000 * jumlah)} jumlah={jumlah} tambah={() => setJumlah(jumlah + 1)} kurang={() => setJumlah(jumlah > 1 ? jumlah - 1 : 1)} buttomClass={buyNow} cancel={toggleBuyNow} buy={buyNowPayment}/>}
    </div>
  );
}