const express = require("express");

 const { Signup } = require("../Controllers/SignupController");
 const { Login } = require("../Controllers/LoginCotroller");

const router=express.Router()

router.post("/Signup",Signup) 
router.post("/Login",Login) 

module.exports = router;  