import express from "express"
import schema from "../../schema.js"

const route = express.Router()

route.put("/updateCart",(req,res) => {
  schema.findOneAndUpdate({email:req.body.email,password:req.body.password},{cart:req.body.cart})
  .then(response => res.status(200).json({status:200,data:response,message:"Cart berhasil update"}))
  .catch(err => res.status(500).json({status:500,message:"Cart gagal update"}))
})

export default route