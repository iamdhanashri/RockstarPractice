
const bcrypt = require("bcrypt")
const express=require("express")
const jwt=require("jsonwebtoken")
const { userModel } = require("../model/user.model")

const userRouter=express.Router()


// post 

userRouter.post("/register",(req,res)=>{
const {name,email,password,address}=req.body
try{
 bcrypt.hash(password,5,async(err,hash)=>{
    if(err){
        res.send("user registration failed")
    }else{
        const user=new userModel({name,email,password:hash,address})
        await user.save()
        res.status(201).send("user registration success")
    }
 })
}
catch(e){
    res.send("user registration failed")
}
})


// login 

userRouter.post("/login",async(req,res)=>{
    const {email,password}=req.body
    try{
     const user=await userModel.find({email})
     if(user.length>0){
        bcrypt.compare(password,user[0].password,(err,result)=>{
            if(result){
                let token=jwt.sign({userID:user[0]._id},"masai")
                res.status(201).send({msg:"login success","token":token})
            }else{
        res.send("user login failed")
                
            }
        })
     }else{
        res.send("wrong credentials")
     }
    }
    catch(e){
        res.send("user login failed")
    }
})

// get

userRouter.get("/users",async(req,res)=>{
    const user= await userModel.find()
    res.status(200).send(user)
})


// getId 

userRouter.get("/users/:id",async(req,res)=>{
    const id =req.params.id
    const user =await userModel.findOne({_id:id})
    res.status(200).send(user)
})

 //patchId

 userRouter.patch("/users/:id",async(req,res)=>{
    const userID=req.params.id
    await userModel.findByIdAndUpdate({_id:userID}) 
    res.send({"msg":`user with id:${userID} has been updated`})
 })

module.exports={
    userRouter
}