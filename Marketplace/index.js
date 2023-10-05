const express=require("express");
const { dbConnection } = require("./config/db");

const app=express();
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("homepage")

})

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