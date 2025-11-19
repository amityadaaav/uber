const captain = require("../Models/CaptainSchema");
const bcrypt = require("bcrypt");
const axios = require("axios");
const jwt = require("jsonwebtoken");

exports.SignupCaptain = async (req, res) => {
  try {
    const { Firstname, lastname, email, password, color,plate,vehicleType,capacity} = req.body;

    // 1️⃣ CHECK CAPTCHA FIRST
    // if (!captchaToken) {
    //   return res.status(400).json({
    //     success: false, 
    //     message: "Captcha verification failed",
    //   });
    // }

    // const googleURL = "https://www.google.com/recaptcha/api/siteverify";

    // const captchaVerify = await axios.post(
    //   googleURL,
    //   null,
    //   {
    //     params: {
    //       secret: process.env.RECAPTCHA_SECRET,   // MUST add in .env
    //       response: captchaToken,
    //     },
    //   }
    // );

    // if (!captchaVerify.data.success) {
    //   return res.status(400).json({
    //     success: false,
    //     message: "Captcha validation failed",
    //   });
    // }

    // --------------------------------------------
    // 2️⃣ VALIDATE USER FIELDS
    // --------------------------------------------
    if (!Firstname || !lastname || !email || !password || !color|| !plate ||!vehicleType ||!capacity) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    if (password.length < 3) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 3 characters long",
      });
    }

    const existingUser = await user.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "Email already exists",
      });
    }
    // 3️⃣ HASH PASSWORD
    const hashedPassword = await bcrypt.hash(password, 10);

    // 4️⃣ SAVE USER
    const newUser = await captain.create({
      Firstname,
      lastname,
      email,
      color,
      plate,
      vehicleType,
      capacity,
      password: hashedPassword,
    });

    // 
    // 5️⃣ CREATE JWT TOKEN (Modern Way) 
    // const token = jwt.sign(
    //   { id: newUser._id, email: newUser.email },
    //   process.env.JWT_SECRET,
    //   { expiresIn: "7d" }
    // );

    // 6️⃣ SEND RESPONSE
    return res.status(200).json({
      success: true,
      message: `Captain ${Firstname} registered successfully`,
      user: {
        id: newUser._id,
        Firstname: newUser.Firstname,
        lastname: newUser.lastname,
        email: newUser.email,
      },
      // token: token,
    });

  } catch (error) {
    console.error("❌ Signup error:", error);
    return res.status(500).json({
      success: false,
      message: "Signup failed",
    });
  }
};
