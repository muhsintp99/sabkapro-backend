// paymentController.js


const { createPaymentIntent, refundPayment } = require('../services/paymentService');

const createPayment = async (req, res) => {
  try {
    const { amount, currency, metadata } = req.body;
    const paymentIntent = await createPaymentIntent(amount, currency, metadata);
    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const refund = async (req, res) => {
  try {
    const { paymentIntentId } = req.body;
    const refundData = await refundPayment(paymentIntentId);
    res.json(refundData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createPayment, refund };
