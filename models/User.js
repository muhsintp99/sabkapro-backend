// User.js

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const moment = require('moment');

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['admin', 'staff_sales', 'staff_hr', 'staff_support', 'candidate', 'employer'], default: 'candidate' },
  isVerified: { type: Boolean, default: false }
}, { timestamps: true });

// Password hashing
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// Compare passwords
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Format date
userSchema.methods.formatCreatedAt = function () {
  return moment(this.createdAt).format('DD-MM-YYYY HH:mm:ss');
};

module.exports = mongoose.model('User', userSchema);
