
const mongoose=require("mongoose")
const LoginSchema=new mongoose.Schema({
    Firstname:{
        type:String,
        required:true,
        // maxlength:{10,""}

    },
    email:{
        type:String,
        required:true,
       
    },
     lastname:{
        type:String,
        required:false,
        

    },
    password:{
        type:String,
        required:true,
        select:false
       

    },
    avatar:{
            type:String,
    },
    mobileNo:{
        type:Number,
    },
    address:{
           type:String,
    }
},{timestamps:true})

module.exports=mongoose.model("user",LoginSchema)