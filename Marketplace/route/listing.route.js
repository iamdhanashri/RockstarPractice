
const bcrypt = require("bcrypt")
const express=require("express")
const jwt=require("jsonwebtoken")

const listingRouter=express.Router()

// post 

listingRouter.post("/listings",async(req,res)=>{
    const list=new listingModel(req.body)
    await list.save()
    res.send("list created") 
})



// get 

listingRouter.get("/listings",async(req,res)=>{
    const list= await listingModel.find()
    res.status(200).send(list)
})


// getId 

listingRouter.get("/listings/:id",async(req,res)=>{
    const id =req.params.id
    const list =await listingModel.findOne({_id:id})
    res.status(200).send(list)
})
