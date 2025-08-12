// OTP.js

const mongoose = require('mongoose');
const moment = require('moment');

const otpSchema = new mongoose.Schema({
  email: { type: String, required: true },
  otp: { type: String, required: true },
  expiresAt: { type: Date, required: true }
}, { timestamps: true });

// Format timestamps
otpSchema.methods.formatCreatedAt = function () {
  return moment(this.createdAt).format('DD-MM-YYYY HH:mm:ss');
};

module.exports = mongoose.model('OTP', otpSchema);
