// authController.js

const User = require('../models/User');
const OTP = require('../models/OTP');
const generateToken = require('../utils/generateToken');
const generateOTP = require('../utils/generateOTP');
const { sendOTPEmail, sendWelcomeEmail } = require('../services/emailService');
const moment = require('moment');

/**
 * Register User
 */
const registerUser = async (req, res) => {
  try {
    const { fullName, email, password, role } = req.body;

    if (await User.findOne({ email })) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    const user = await User.create({ fullName, email, password, role });

    // Send welcome email
    await sendWelcomeEmail(email, fullName);

    res.status(201).json({
      _id: user._id,
      fullName: user.fullName,
      email: user.email,
      role: user.role,
      token: generateToken(user._id, user.role)
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * Login User
 */
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user._id,
        fullName: user.fullName,
        email: user.email,
        role: user.role,
        token: generateToken(user._id, user.role)
      });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * Send OTP
 */
const sendOTP = async (req, res) => {
  const { email, name } = req.body;
  try {
    const { otp, expiry } = await sendOTPEmail(email, name);
    await OTP.create({ email, otp, expiresAt: expiry });
    res.json({ message: 'OTP sent to email', expiresAt: moment(expiry).format('DD-MM-YYYY HH:mm:ss') });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * Verify OTP
 */
const verifyOTP = async (req, res) => {
  const { email, otp } = req.body;
  try {
    const record = await OTP.findOne({ email, otp });
    if (!record) return res.status(400).json({ message: 'Invalid OTP' });

    if (record.expiresAt < new Date()) return res.status(400).json({ message: 'OTP expired' });

    await User.findOneAndUpdate({ email }, { isVerified: true });
    res.json({ message: 'OTP verified successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * Get Current User
 */
const getCurrentUser = async (req, res) => {
  res.json(req.user);
};

module.exports = { registerUser, loginUser, sendOTP, verifyOTP, getCurrentUser };
