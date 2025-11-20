const captain = require("../Models/CaptainSchema");
const bcrypt = require("bcrypt");
const axios = require("axios");
const jwt = require("jsonwebtoken");

exports.SignupCaptain = async (req, res) => {
  try {
    const { Fullname, email, password, vehicleDetails } = req.body;

    console.log("REQ BODY:", req.body);

    // if (!Fullname || !Fullname.Firstname || !Fullname.lastname ||
    //     !email || !password || !vehicleDetails ||
    //     !vehicleDetails.color || !vehicleDetails.plate ||
    //     !vehicleDetails.vehicleType || !vehicleDetails.capacity) {
    //   return res.status(400).json({
    //     success: false,
    //     message: "All fields are required",
    //   });
    // }

    if (password.length < 3) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 3 characters long",
      });
    }

    const existingcaptain = await captain.findOne({ email });
    if (existingcaptain) {
      return res.status(400).json({
        success: false,
        message: "Email already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newcaptain = await captain.create({
      Fullname: {
        Firstname: Fullname.Firstname,
        lastname: Fullname.lastname,
      },
      email,
      password: hashedPassword,
      vehicleDetails: {
        color: vehicleDetails.color,
        plate: vehicleDetails.plate,
        vehicleType: vehicleDetails.vehicleType,
        capacity: vehicleDetails.capacity,
      }
    });

    return res.status(200).json({
      success: true,
      message: `Captain ${Fullname.Firstname} registered successfully`,
      captain: newcaptain
    });

  } catch (error) {
    console.error("❌ Signup error:", error);
    return res.status(500).json({
      success: false,
      message: "Signup failed",
    });
  }
};
