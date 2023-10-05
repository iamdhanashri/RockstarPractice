
const bcrypt = require("bcrypt")
const express=require("express")
const jwt=require("jsonwebtoken")
const { prodModel } = require("../model/product.model")

const prodRouter=express.Router()


// get

prodRouter.get("/listings",async(req,res)=>{
    const pro= await prodModel.find()
    res.status(200).send(pro)
})


// getId 

prodRouter.get("/listings/:id",async(req,res)=>{
    const id =req.params.id
    const pro =await prodModel.findOne({_id:id})
    res.status(200).send(pro)
})

module.exports={
    prodRouter
}