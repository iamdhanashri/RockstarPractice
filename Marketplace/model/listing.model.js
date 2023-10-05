
const mongoose=require("mongoose")

const listingSchema=mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    category:String,
    owner:[{type: mongoose.Schema.Types.ObjectId,
        ref: 'user'}] 
    
})

const listingModel=mongoose.model("listing",listingSchema)

module.exports={
    listingModel
}