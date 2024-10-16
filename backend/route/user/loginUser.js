import express from "express"
import schema from "../../schema.js"

const route = express.Router()

route.post("/login",async (req,res) => {
  let email = await schema.findOne({email:req.body.email})
  let password = await schema.findOne({password:req.body.password})
  if(email && password) {
    res.status(200).json({status:200,data:email,message:"Login successfull"})
  }
  else {
    res.status(404).json({status:404,message:"Login failed"})
  }
})

export default route