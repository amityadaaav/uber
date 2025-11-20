const captain = require("../Models/CaptainSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.LoginCaptain = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1️⃣ Validate input
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please provide both email and password",
      });
    }

    // 2️⃣ Find captain in DB (use await) 
    const existingcaptain = await captain.findOne({ email }).select("+password");
    if (!existingcaptain) {
      return res.status(404).json({
        success: false,
        message: "This captain is not registered",
      });
    }

    // 3️⃣ Compare password
    const isMatch = await bcrypt.compare(password, existingcaptain.password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Password is incorrect",
      });
    }

    // 4️⃣ Create JWT payload
    const payload = {
      email: existingcaptain.email,
      id: existingcaptain._id,
      role: existingcaptain.role || "captain",
    };

    // 5️⃣ Generate token
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "2h",
    });

    // 6️⃣ Remove password before sending captain info
    existingcaptain.password = undefined;

    // 7️⃣ Success response
    res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      captain: existingcaptain,
    });

  } catch (error) {
    console.error("❌ Login error:", error);
    res.status(500).json({
      success: false,
      message: "Could not login", 
    });
  }
};
