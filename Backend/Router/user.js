const express = require("express");
const {requireAuth}=require("../Middleware/auth")
 const { Signup } = require("../Controllers/SignupController");
 const { Login } = require("../Controllers/LoginCotroller");
const { SignupCaptain } = require("../Controllers/SignupCaptainController");


const router=express.Router()

router.post("/Signup",Signup) 
router.post("/Login",Login) 
router.post("/captainsignup",SignupCaptain)
router.get("/Profile", requireAuth, (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to your protected profile route",
    user: req.user,
  });
});

module.exports = router;  