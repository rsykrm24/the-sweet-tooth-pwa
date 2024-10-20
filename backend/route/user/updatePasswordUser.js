import express from "express"
import schema from "../../libs/schema.js"

const route = express.Router()

route.put("/updatePassword",(req,res) => {
  schema.findOneAndUpdate({email:req.body.email},{password:req.body.password})
  .then(response => res.status(200).json({status:200,data:response,message:"Password berhasil update"}))
  .catch(err => res.status(500).json({status:500,message:"Password gagal update"}))
})

export default route