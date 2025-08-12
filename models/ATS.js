// ATS.js

const mongoose = require('mongoose');
const moment = require('moment');

const atsSchema = new mongoose.Schema({
  candidateId: { type: mongoose.Schema.Types.ObjectId, ref: 'Candidate' },
  parsedData: { name: String, contact: String, education: String, skills: [String], experience: String },
  jobAppliedFor: { type: mongoose.Schema.Types.ObjectId, ref: 'JobPost' },
  status: { type: String, enum: ['applied', 'shortlisted', 'rejected', 'interview_scheduled', 'hired'], default: 'applied' },
  interviewDetails: [{ date: Date, interviewer: String, status: String }]
}, { timestamps: true });

atsSchema.methods.formatCreatedAt = function () {
  return moment(this.createdAt).format('DD-MM-YYYY HH:mm:ss');
};

module.exports = mongoose.model('ATS', atsSchema);
