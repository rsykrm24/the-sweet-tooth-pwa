import express from "express"
import cors from "cors"
import "dotenv/config"
import getAllDataBakery from "./route/bakery/getAllData.js"
import getDataBakeryByCategory from "./route/bakery/getDataByCategory.js"
import getDataBakeryById from "./route/bakery/getDataById.js"
import getDataBakeryBySearch from "./route/bakery/getDataBySearch.js"
import mongoose from "mongoose"
import registerUser from "./route/user/registerUser.js"
import loginUser from './route/user/loginUser.js'
import updatePassword from './route/user/updatePasswordUser.js'
import getUser from './route/user/getUser.js'
import payment from './route/payment/payment.js'

let app = express()
let port = process.env.PORT
app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGODB)
.then(res => console.log("Database berhasil tersambung"))
.catch(err => console.log(err))

app.use(getAllDataBakery)
app.use(getDataBakeryByCategory)
app.use(getDataBakeryById)
app.use(getDataBakeryBySearch)
app.use(registerUser)
app.use(loginUser)
app.use(updatePassword)
app.use(getUser)
app.use(payment)

app.use("*",(req,res) => {
  res.status(500).json({status:500,message:"Endpoint not found"})
})

app.listen(port, () => console.log(`Server is running on port ${port}`))