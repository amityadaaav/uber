require("dotenv").config()
const express=require("express")
const Dbconnect=require("./Config/database")
const cors=require("cors")
const app=express()
const PORT=process.env.PORT || 4000
app.use(cors())

//midddleware 
app.use(express.json()); 
const userRoutes=require("./Router/user") 
app.use("/api/v1",userRoutes)

app.listen(PORT || 4000,()=>{
    console.log("server started")
})

Dbconnect()