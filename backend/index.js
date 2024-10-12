import express from "express"
import cors from "cors"
import "dotenv/config"
import getAllDataBakery from "./route/bakery/getAllData.js"
import getDataBakeryByCategory from "./route/bakery/getDataByCategory.js"
import getDataBakeryById from "./route/bakery/getDataById.js"
import getDataBakeryBySearch from "./route/bakery/getDataBySearch.js"

let app = express()
let port = process.env.PORT
app.use(cors())
app.use(express.json())

app.use(getAllDataBakery)
app.use(getDataBakeryByCategory)
app.use(getDataBakeryById)
app.use(getDataBakeryBySearch)

app.listen(port, () => console.log(`Server is running on port ${port}`))