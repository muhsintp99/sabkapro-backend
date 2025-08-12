// Employer.js

const mongoose = require('mongoose');
const moment = require('moment');

const employerSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  whatsappNumber: String,
  organization: String,
  hiringPreferences: [String],
  verificationStatus: { type: String, enum: ['pending', 'verified', 'rejected'], default: 'pending' },
  planType: { type: String, enum: ['free', 'premium'], default: 'free' },
  billingHistory: [{ amount: Number, date: Date, transactionId: String }],
  assignedStaff: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true });

employerSchema.methods.formatCreatedAt = function () {
  return moment(this.createdAt).format('DD-MM-YYYY HH:mm:ss');
};

module.exports = mongoose.model('Employer', employerSchema);
