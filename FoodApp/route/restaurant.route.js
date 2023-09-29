
const bcrypt = require("bcrypt")

const express=require("express")

const jwt=require("jsonwebtoken")

const { restaurantModel } = require("../model/restaurant.model")

const restRouter=express.Router()


// post 

restRouter.post("/restaurants",async(req,res)=>{
    const rest=new restaurantModel(req.body)
    await rest.save()
    res.send("rest created") 
})

// get 

restRouter.get("/restaurants",async(req,res)=>{
    const rest= await restaurantModel.find()
    res.status(200).send(rest)
})

// getId 

restRouter.get("/restaurants/:id",async(req,res)=>{
    const id =req.params.id
    const rest =await restaurantModel.findOne({_id:id})
    res.status(200).send(rest)
})

// get menuId 

restRouter.get("/restaurants/:id/menu",async(req,res)=>{
    const id =req.params.id
    const rest =await restaurantModel.findOne({_id:id})
    const menu= rest.menu
    res.status(200).send(menu)
})


// post menu id

restRouter.post("/restaurants/:id/menu",async(req,res)=>{

    const id =req.params.id
    const {name,description,price,image}=req.body
    const rest =await restaurantModel.findOne({_id:id})
    const newItem={
        name,description,price,image
    }
    rest.menu.push(newItem)
    await rest.save()
    res.status(201).send("item added to menu")
})


// delete menu id

restRouter.delete("/restaurants/:id/menu/:mid",async(req,res)=>{
    const id =req.params.id
    const mid =req.params.mid

    const rest =await restaurantModel.findOne({_id:id})
    const menu=rest.menu
    const index= menu.findIndex(i=>i._id.toString()==mid)
    menu.splice(index,1)
    await rest.save()
    res.status(202).send("item deleted from menu")
})

module.exports={
    restRouter
}
