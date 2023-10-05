
const mongoose=require("mongoose")

const orderSchema=mongoose.Schema({
    user : { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    product : { type:mongoose.Schema.Types.ObjectId, ref: 'product' },
    totalAmount:Number,
    shippingAddress:String,
    paymentMethod:String,
    orderStatus:String
   
})

const orderModel=mongoose.model("order",orderSchema)

module.exports={
    orderModel
}