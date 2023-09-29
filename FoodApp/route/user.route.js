
const express=require("express")

const jwt=require("jsonwebtoken")

const bcrypt = require("bcrypt")

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
            res.status(201).send("user registration successful")
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

// put 

userRouter.put("/user/:id/reset",async(req,res)=>{
    try{
   const {id}=req.params
    const {oldPassword,newPassword}=req.body
    const user= await userModel.findById(id)
    console.log(user.password)
  
    if(!user){
      
        res.send("compare error occur") 
    }
  
    const isPass=await bcrypt.compare(oldPassword,user.password)


console.log("ispass",isPass)
if(isPass){

    const hashPass= await bcrypt.hash(newPassword,5)
    user.password=hashPass
    await user.save()

    res.status(204).send({msg:"password reset successful"})
    // res.status(204).send("password reset successful")

}



    }
    catch(e){
        res.send("catch error occur")
    }
})

module.exports={
    userRouter
}

