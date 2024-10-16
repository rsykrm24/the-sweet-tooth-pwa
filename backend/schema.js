import mongoose from "mongoose"

let userSchema = new mongoose.Schema({
  name:{
    type:String
  },
  email:{
    type:String
  },
  password:{
    type:String
  },
  cart:{
    type:String
  },
})

export default mongoose.model("userModel",userSchema) || mongoose.models.userModel