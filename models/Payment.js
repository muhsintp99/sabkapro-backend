// Payment.js

const mongoose = require('mongoose');
const moment = require('moment');

const paymentSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  userType: { type: String, enum: ['candidate', 'employer'] },
  amount: Number,
  currency: String,
  status: { type: String, enum: ['paid', 'pending', 'failed'], default: 'pending' },
  transactionId: String,
  invoiceUrl: String
}, { timestamps: true });

paymentSchema.methods.formatCreatedAt = function () {
  return moment(this.createdAt).format('DD-MM-YYYY HH:mm:ss');
};

module.exports = mongoose.model('Payment', paymentSchema);
