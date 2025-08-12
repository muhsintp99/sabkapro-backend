// Course.js

const mongoose = require('mongoose');
const moment = require('moment');

const courseSchema = new mongoose.Schema({
  category: String,
  title: String,
  description: String,
  duration: String,
  thumbnail: String,
  videos: [{ title: String, url: String, order: Number }],
  accessLevel: { type: String, enum: ['free', 'pro'], default: 'free' }
}, { timestamps: true });

courseSchema.methods.formatCreatedAt = function () {
  return moment(this.createdAt).format('DD-MM-YYYY HH:mm:ss');
};

module.exports = mongoose.model('Course', courseSchema);
