const dotenv = require("dotenv");
dotenv.config();
const mongoose=require("mongoose")
     DATABASE_URL="mongodb+srv://amityadaaav:Amit123456@cluster0.6pjd9ia.mongodb.net/uber?retryWrites=true&w=majority";

    const DbConnect=()=>{ 
        mongoose.connect(process.env.DATABASE_URL,{   
        })
        .then(()=>{console.log("DB connected succesfully")
        //  ✅ Test insert is code ka use tab hoga ki connected hai ki nahi
        // const userSchema = new mongoose.Schema({
        //     name: String,
        //     email: String
        // });
        // const User = mongoose.model("User", userSchema);

        // User.create({ name: "Test User", email: "test@example.com" })
        //     .then(() => console.log("✅ Test user added"))
        //     .catch(err => console.log("❌ Error inserting test user:", err));
    
        })
        .catch((error)=>{
            console.log("not connected")
            console.error(error)
            process.exit(1)  
        })
        
    }   

    module.exports=DbConnect

