
const bcrypt = require("bcrypt")
const express=require("express")
const jwt=require("jsonwebtoken")
const { cartModel } = require("../model/cart.model")

const cartRouter=express.Router()

// post 

cartRouter.post("/listings",async(req,res)=>{
    const cart=new cartModelModel(req.body)
    await cart.save()
    res.send("cart created") 
})

// deleteId


cartRouter.delete("/listings/:id",async(req,res)=>{
    const cartID=req.parems.id
    await cartModel.findByIdAndDelete({_id:cartID}) 
    res.send({"msg":`cart with id:${cartID} has been deleted`})
 })

 //patchId

 cartRouter.patch("/listings/:id",async(req,res)=>{
    const cartID=req.parems.id
    await cartModel.findByIdAndUpdate({_id:cartID}) 
    res.send({"msg":`cart with id:${cartID} has been updated`})
 })

 module.exports={
    cartRouter
 }




