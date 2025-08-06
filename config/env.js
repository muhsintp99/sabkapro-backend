// env.js

const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  PORT: process.env.PORT || 5000,
  MONGODB_URL: process.env.MONGODB_URL,
  RAZORPAY_KEY_ID: process.env.RAZORPAY_KEY_ID,
  RAZORPAY_KEY_SECRET: process.env.RAZORPAY_KEY_SECRET,
  VIMEO_CLIENT_ID: process.env.VIMEO_CLIENT_ID,
  VIMEO_CLIENT_SECRET: process.env.VIMEO_CLIENT_SECRET,
  VIMEO_ACCESS_TOKEN: process.env.VIMEO_ACCESS_TOKEN,
};
