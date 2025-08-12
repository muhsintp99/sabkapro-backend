// JobPost.js

const mongoose = require('mongoose');
const moment = require('moment');

const jobPostSchema = new mongoose.Schema({
  title: String,
  description: String,
  location: String,
  salary: String,
  tags: [String],
  employerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Employer' },
  status: { type: String, enum: ['active', 'closed'], default: 'active' }
}, { timestamps: true });

jobPostSchema.methods.formatCreatedAt = function () {
  return moment(this.createdAt).format('DD-MM-YYYY HH:mm:ss');
};

module.exports = mongoose.model('JobPost', jobPostSchema);
