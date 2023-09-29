
const express=require("express");
const { dbConnection } = require("./config/db");
const { userRouter } = require("./route/user.route");
const { restRouter } = require("./route/restaurant.route");
const { orderRouter } = require("./route/order.route");

const app=express();

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("homepage")

})


app.use("/api",userRouter)
app.use("/api",restRouter)
app.use("api",orderRouter)


app.listen(8080,async()=>{
    try{
    await dbConnection
    console.log("connected to db")
    }catch(e){
    console.log(e.message)
    }
    console.log("listening at port 8080")
})