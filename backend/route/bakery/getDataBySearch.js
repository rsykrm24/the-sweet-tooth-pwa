import express from "express"
import supabase from "../../supabase.js"

let route = express.Router()

route.get("/bakery/search/:id",(req,res) => {
  let {id} = req.params
  supabase.from("bakery").select("*")
  .then(result => {
    let search = id.split("").map((data,i) => (i != 0) ? data.toLowerCase() : data.toUpperCase()).join("")
    let data = result.data.filter(data => data.title.search(search) >= 0)
    if(data.length == 0) {
      res.status(404).json({status:404,message:"Data gagal didapatkan"})
    }
    else {
      res.status(200).json({status:200,data:data,message:"Data berhasil didapatkan"})
    }
  })
  .catch(err => res.status(404).json({status:404,message:"Data gagal didapatkan"}))
})

export default route