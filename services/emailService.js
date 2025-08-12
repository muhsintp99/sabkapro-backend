// emailService.js

const transporter = require('../config/emailConfig');
const generateOTP = require('../utils/generateOTP');
const { OTP_EXPIRY_MINUTES } = require('../utils/constants');

/**
 * Send OTP Email
 */
const sendOTPEmail = async (email, name) => {
  const otp = generateOTP();
  const expiry = new Date(Date.now() + OTP_EXPIRY_MINUTES * 60 * 1000);

  const message = `
    <h2>Hello ${name || 'User'},</h2>
    <p>Your OTP code is: <strong>${otp}</strong></p>
    <p>This OTP will expire in ${OTP_EXPIRY_MINUTES} minutes.</p>
  `;

  await transporter.sendMail({
    from: `"Sabka Pro" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: 'Your OTP Code',
    html: message
  });

  return { otp, expiry };
};

/**
 * Send Welcome Email
 */
const sendWelcomeEmail = async (email, name) => {
  const message = `
    <h2>Welcome to Sabka Pro, ${name || 'User'}!</h2>
    <p>We are excited to have you on board. Start exploring job opportunities and training resources today.</p>
  `;

  await transporter.sendMail({
    from: `"Sabka Pro" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: 'Welcome to Sabka Pro 🎉',
    html: message
  });
};

module.exports = {
  sendOTPEmail,
  sendWelcomeEmail
};
