import express from "express"
import schema from "../../schema.js"

const route = express.Router()

route.post("/register",(req,res) => {
  let newSchema = new schema(req.body)
  newSchema.save()
  .then(response => res.status(200).json({status:200,message:"Data berhasil dibuat"}))
  .catch(err => res.status(500).json({status:500,message:"Data gagal dibuat"}))
})

export default route