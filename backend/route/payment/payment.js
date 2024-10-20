import express from "express"
import snap from "../../midtrans.js"
import { parameter } from "../../parameter.js"

const route = express.Router()

route.post("/payment",(req,res) => {
  let amount = req.body.amount
  let id = req.body.id
  let name = req.body.name
  let email = req.body.email
  snap.createTransaction(parameter(amount,id,name,email))
  .then(response => res.status(200).json({status:200,data:response,message:"Payment successfully"}))
  .catch(err => res.status(500).json({status:500,message:"Payment failed"}))
})

export default route