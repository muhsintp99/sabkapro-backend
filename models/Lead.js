// Lead.js

const mongoose = require('mongoose');
const moment = require('moment');

const leadSchema = new mongoose.Schema({
  name: String,
  email: String,
  whatsappNumber: String,
  educationalQualification: String,
  jobPreferences: [String],
  cv: String,
  registrationType: { type: String, enum: ['free', 'pro'], default: 'free' },
  source: { type: String, enum: ['social', 'google', 'direct', 'reference', 'walk_in'] },
  status: { type: String, enum: ['new', 'follow_up', 'converted'], default: 'new' }
}, { timestamps: true });

leadSchema.methods.formatCreatedAt = function () {
  return moment(this.createdAt).format('DD-MM-YYYY HH:mm:ss');
};

module.exports = mongoose.model('Lead', leadSchema);
