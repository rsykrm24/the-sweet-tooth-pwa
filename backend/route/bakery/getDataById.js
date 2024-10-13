import express from "express"
import supabase from "../../supabase.js"

let route = express.Router()

route.get("/bakery/:id",(req,res) => {
  let {id} = req.params
  supabase.from("bakery").select("*").eq("id",id)
  .then(result => res.status(200).json({status:200,data:result.data[0],message:"Data berhasil didapatkan"}))
  .catch(err => res.status(404).json({status:404,message:"Data gagal didapatkan"}))
})

export default route
