
const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    name: String,
    email: String,
    password: String,
    address: String,
    phoneNumber:String,
    listings: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Listing'
      }],
      cart: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
      }],
      orders: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order'
      }]

})

const userModel=mongoose.model("user",userSchema)

module.exports={
    userModel
}