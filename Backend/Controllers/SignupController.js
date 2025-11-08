const user=require("../Models/user")
const bcrypt = require("bcrypt");
exports.Signup=async(req,res)=>{
    try{
        // fetch data from req.body
        const{Firstname,lastname,email,password}=req.body
        //validate the all email and username
        const existingemail=await user.findOne({email})
        
        if(existingemail){
            return res.status(400).json({
                success:false,
                message:"email already exits"
            })
 
        }
        const existingFirstname=await user.findOne({Firstname})
        if(existingFirstname){
            return res.status(400).json({
                success:false,
                message:"firstname is already exists"
            })
        }
        //check its email is username is empty
        if(! email || ! Firstname || ! password){ 
            return res.status(404).json({
                success:false,
                message:"all field should fill"
            })
        }
        // validation password
        if(password.length<3){
           return res.status(404).json({
                success:false,
                message:"legth should come more than 3"
            }) 
        }
        let hashedPassword
        try{
            hashedPassword=await bcrypt.hash(password,10)
            console.log(hashedPassword)
        }catch(error){
            return res.status(400).json({
                 message:"password not hashed"
            })
        }
        //save indide db

        const newUser=new user({Firstname,password:hashedPassword,email})
        newUser.save()
         return res.status(200).json({
            success:true,
            message:`${Firstname} registred succesfully`
        })
    }catch(error){
         console.error("❌ Signup error:", error); 
        res.status(500).json({
        success:false,
        message:"couldnot registred"
    })
    }

}