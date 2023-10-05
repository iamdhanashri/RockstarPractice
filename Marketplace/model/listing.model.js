
const mongoose=require("mongoose")

const listingSchema=mongoose.Schema({
    title: String,
    description: String,
    password: String,
    price: String,
    category:String,
    owner:[{type: mongoose.Schema.Types.ObjectId,
        ref: 'user'}] 
    
})

const listingModel=mongoose.model("user",listingSchema)

module.exports={
    listingModel
}