

const bcrypt = require("bcrypt")

const express=require("express")

const jwt=require("jsonwebtoken")

const { orderModel } = require("../model/order.model")

const orderRouter=express.Router()


// post 

orderRouter.post("/orders",async(req,res)=>{

    try {
        const { user, restaurant, items, totalPrice, deliveryAddress } = req.body;
        const order = new orderModel({
          user,
          restaurant,
          items,
          totalPrice,
          deliveryAddress,
          status: 'placed'
        });
        await order.save();
        res.status(201).send({ message: 'Order placed successfully' });
      } catch (error) {
        res.send({ error: 'An error occurred' });
      }

})

// get 


orderRouter.get('/orders/:id', async (req, res) => {
    const id =req.params.id
    const order =await orderModel.findOne({_id:id})
    res.status(200).send(order)
  });


//   put 

orderRouter.put('/orders/:id', async (req, res) => {
 
      const { status } = req.body;
      const id =req.params.id
      const order =await orderModel.findOne({_id:id})
      order.status = status;
      await order.save();
      res.status(204).send("stutus updated successfully");
    
  });

  module.exports ={
    orderRouter
  }