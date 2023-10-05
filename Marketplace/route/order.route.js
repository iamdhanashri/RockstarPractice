

const bcrypt = require("bcrypt")

const express=require("express")

const jwt=require("jsonwebtoken")
const { orderModel } = require("../model/order.model")


const orderRouter=express.Router()


// post 

orderRouter.post("/orders",async(req,res)=>{

    try {
        const { user, product, totalAmount, shippingAddress, paymentMethod,orderStatus} = req.body;
        const order = new orderModel({
          user,
          product,
          totalAmount,
          shippingAddress,
          paymentMethod,
          orderStatus: 'placed'
        });
        await order.save();
        res.status(201).send({ message: 'Order placed successfully' });
      } catch (error) {
        res.send({ error: 'An error occurred' });
      }

})

// getId

orderRouter.get('/orders/:id', async (req, res) => {
    const id =req.params.id
    const order =await orderModel.findOne({_id:id})
    res.status(200).send(order)
  });


  // get

  orderRouter.get("/orders",async(req,res)=>{
    const order= await orderModel.find()
    res.status(200).send(order)
})

module.exports={
    orderRouter
}