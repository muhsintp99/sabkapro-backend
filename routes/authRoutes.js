// authRoutes.js


const express = require('express');
const { registerUser, loginUser, sendOTP, verifyOTP, getCurrentUser } = require('../controllers/authController');
const { protect } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/send-otp', sendOTP);
router.post('/verify-otp', verifyOTP);
router.get('/me', protect, getCurrentUser);

module.exports = router;
