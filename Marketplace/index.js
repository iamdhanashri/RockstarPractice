const express=require("express");
const { dbConnection } = require("./config/db");
const { userRouter } = require("./route/user.route");
const { listingRouter } = require("./route/listing.route");
const { prodRouter } = require("./route/product.route");
const { cartRouter } = require("./route/cart.route");

const app=express();
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("homepage")

})

app.use("/api",userRouter)
app.use("/api",listingRouter)
app.use("/api",prodRouter)
app.use("/api",cartRouter)

app.listen(8080,async()=>{
    try{
   await dbConnection
   console.log("connected to db")
    }
    catch(e){
        console.log(e.message)
    }
    console.log("listening port 8080")
})