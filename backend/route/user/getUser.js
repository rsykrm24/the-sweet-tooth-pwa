import express from "express"
import schema from "../../libs/schema.js"

const route = express.Router()

route.post("/getUser",async(req,res) => {
  let data = await schema.findOne({email:req.body.email})
  if(data) {
    res.status(200).json({status:200,data:data,message:"Akun ditemukan"})
  }
  else {
    res.status(404).json({status:404,message:"Akun tidak ditemukan"})
  }
})

export default route