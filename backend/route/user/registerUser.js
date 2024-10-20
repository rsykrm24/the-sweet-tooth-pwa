import express from "express"
import schema from "../../libs/schema.js"

const route = express.Router()

route.post("/register", async(req,res) => {
  let newSchema = new schema(req.body)
  let sameEmail = await schema.findOne({email:req.body.email})
  if(sameEmail != null) {
    res.status(500).json({status:500,message:"Email telah terdaftar"})
  }
  else {
    newSchema.save()
    .then(response => res.status(200).json({status:200,message:"Data berhasil dibuat"}))
    .catch(err => res.status(500).json({status:500,message:"Data gagal dibuat"}))
  }
})

export default route