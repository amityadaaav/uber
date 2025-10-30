require("dotenv").config()
const mongoose=require("mongoose")


const Dbconnect=()=>{
   mongoose.connect(process.env.DATABASE_URL,{})
   .then(()=>{console.log("Db connect successfully")

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
       console.log("Db not connected")
       console.error(error)
   })
}
module.exports=Dbconnect  
