const mongoose=require("mongoose")

const CaptainSchema=new mongoose.Schema({

    Fullname:{
        firstname:{
            type:String,
            requred:true,
            minlength:[3,'color must be at least 3 characters long']
        },
        lastname:{
            type:String,
           
        }
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,

    },
    status:{
             type:String,
          },
    vehicleDetails:{
          color:{
             type:String,
             required:true
          },
          plate:{
             type:String,
             required:true
          },
          vehicleType:{
             type:String,
             required:true
          },
          capacity:{
             type:Number,
             required:true
          }
    }
})