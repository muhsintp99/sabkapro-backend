// emailConfig.js

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false, // true for 465, false for 587
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Verify SMTP connection
transporter.verify(function (error, success) {
  if (error) {
    console.error('❌ Email Config Error:', error);
  } else {
    console.log('📧 Email Server Ready to Send Messages');
  }
});

module.exports = transporter;
