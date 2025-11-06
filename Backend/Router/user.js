const express = require("express");

 const { Signup } = require("../Controllers/SignupController");

const router=express.Router()

router.post("/Signup",Signup) 

module.exports = router;  