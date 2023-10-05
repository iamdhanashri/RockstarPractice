
const mongoose=require("mongoose")

const prodSchema=mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    stock:Number

})

const prodModel=mongoose.model("product",prodSchema)

module.exports={
    prodModel
}