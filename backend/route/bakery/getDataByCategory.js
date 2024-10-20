import express from "express"
import supabase from "../../libs/supabase.js"

let route = express.Router()

route.get("/bakery/category/:id",(req,res) => {
  let param = req.params.id
  supabase.from("bakery").select("*").eq("category",param)
  .then(result => res.status(200).json({status:200,data:result.data,message:"Data berhasil didapatkan"}))
  .catch(err => res.status(404).json({status:404,message:"Data gagal didapatkan"}))
})

export default route