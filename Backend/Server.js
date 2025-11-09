require("dotenv").config()
const express=require("express")
const Dbconnect=require("./Config/database")
const cors=require("cors")
const app=express()
const PORT=process.env.PORT
app.use(cors())
const cookieParser = require('cookie-parser');
app.use(cookieParser());
//midddleware 
app.use(express.json()); 
const userRoutes=require("./Router/user") 
app.use("/api/v1",userRoutes)

app.listen(PORT,()=>{
    console.log(`server started  and running at ${PORT}`)
})

Dbconnect() 