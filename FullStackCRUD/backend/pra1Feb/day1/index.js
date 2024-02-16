const express=require("express")

const connection=require("./db.js")

const app=express()
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Welcome to Homepage")
})

app.get("/users",async(req,res)=>{
    res.send("all users data will be sent")
    } ) 

app.post("/register",(req,res)=>{
    console.log(req.body)
    res.send("user will be registered")
})
  
app.listen(8080,async()=>{
    try{
        await connection
        console.log("connected to DB")
    }
    catch(err){
        console.log("not connected to DB") 
        console.log(err)
    }
    console.log("listening port at 8080")
   })  
    
