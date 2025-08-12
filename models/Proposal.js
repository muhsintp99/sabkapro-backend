// Proposal.js

const mongoose = require('mongoose');
const moment = require('moment');

const proposalSchema = new mongoose.Schema({
  candidateId: { type: mongoose.Schema.Types.ObjectId, ref: 'Candidate' },
  courseName: String,
  fees: Number,
  discount: Number,
  validity: Date,
  notes: String,
  status: { type: String, enum: ['new', 'sent', 'payment_pending', 'converted'], default: 'new' },
  generatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  sentHistory: [{ date: Date, channel: String, status: String }],
  versionHistory: [{ date: Date, data: Object }]
}, { timestamps: true });

proposalSchema.methods.formatCreatedAt = function () {
  return moment(this.createdAt).format('DD-MM-YYYY HH:mm:ss');
};

module.exports = mongoose.model('Proposal', proposalSchema);
