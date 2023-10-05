
const bcrypt = require("bcrypt")
const express=require("express")
const jwt=require("jsonwebtoken")
const { prodModel } = require("../model/product.model")

const prodRouter=express.Router()


// post 

prodRouter.post("/products",async(req,res)=>{
    const pro=new prodModel(req.body)
    await pro.save()
    res.send("pro created") 
})

// get

prodRouter.get("/products",async(req,res)=>{
    const pro= await prodModel.find()
    res.status(200).send(pro)
})


// getId 

prodRouter.get("/products/:id",async(req,res)=>{
    const id =req.params.id
    const pro =await prodModel.findOne({_id:id})
    res.status(200).send(pro)
})

module.exports={
    prodRouter
}