// Candidate.js

const mongoose = require('mongoose');
const moment = require('moment');

const candidateSchema = new mongoose.Schema({
  fullName: String,
  email: { type: String, unique: true },
  whatsappNumber: String,
  planType: { type: String, enum: ['free', 'pro'], default: 'free' },
  education: [{ degree: String, institution: String, year: Number }],
  preferences: [String],
  resume: String,
  videoResume: String,
  assignedStaff: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  notes: [{ text: String, date: Date }],
  isVerified: { type: Boolean, default: false }
}, { timestamps: true });

candidateSchema.methods.formatCreatedAt = function () {
  return moment(this.createdAt).format('DD-MM-YYYY HH:mm:ss');
};

module.exports = mongoose.model('Candidate', candidateSchema);
