const User = require("../Models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1️⃣ Validate input
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please provide both email and password",
      });
    }

    // 2️⃣ Find user in DB (use await) 
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(404).json({
        success: false,
        message: "This user is not registered",
      });
    }

    // 3️⃣ Compare password
    const isMatch = await bcrypt.compare(password, existingUser.password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Password is incorrect",
      });
    }

    // 4️⃣ Create JWT payload
    const payload = {
      email: existingUser.email,
      id: existingUser._id,
      role: existingUser.role || "user",
    };

    // 5️⃣ Generate token
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "2h",
    });

    // 6️⃣ Remove password before sending user info
    existingUser.password = undefined;

    // 7️⃣ Success response
    res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      user: existingUser,
    });

  } catch (error) {
    console.error("❌ Login error:", error);
    res.status(500).json({
      success: false,
      message: "Could not login",
    });
  }
};
