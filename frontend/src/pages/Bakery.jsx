import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import axios from "axios"
import { brown } from "@mui/material/colors"
import { useNavigate } from "react-router-dom"

export default function Bakery() {
  let { id } = useParams();
  let [data, setData] = useState("loading");
  
  useEffect(() => {
    axios.get(`http://localhost:3000/bakery/${id}`)
    .then(res => setData(res.data.data))
    .catch(err => setData(err));
  }, []);
  
  let route = useNavigate();
  
  return (
    <div className="h-screen flex flex-col">
      {/* Sticky header */}
      <div className="bg-orange-900 p-4 sticky w-full z-30 top-0">
        <button onClick={() => route("/dashboard")}>
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
        <button className="border-2 border-orange-900 rounded py-1 px-2 text-orange-900 font-bold w-2/5">Buy Now</button>
        <button className="bg-orange-900 rounded py-1 px-2 text-white font-bold w-2/5">Cart</button>
      </div>
    </div>
  );
}