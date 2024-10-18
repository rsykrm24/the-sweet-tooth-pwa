import express from "express"
import core from "../../midtrans.js"
import { parameter } from "../../parameter.js"

const route = express.Router()

route.post("/payment",(req,res) => {
  let amount = req.body.amount
  let id = Math.round(Math.random()*12000000)
  core.charge(parameter(amount,id))
  .then(response => res.status(200).json({status:200,data:res,message:"Payment successfully"}))
  .catch(err => res.status(500).json({status:500,message:"Payment failed"}))
})

export default route