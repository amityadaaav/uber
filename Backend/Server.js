require("dotenv").config()
const express=require("express")
const Dbconnect=require("./Cofig/Database")
const cors=require("cors")
const app=express()
const PORT=process.env.PORT || 4000
app.use(cors())

app.listen(PORT || 4000,()=>{
    console.log("server started")
})

Dbconnect()