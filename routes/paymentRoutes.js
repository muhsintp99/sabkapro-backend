// paymentRoutes.js

const express = require('express');
const { createPaymentIntent } = require('../services/paymentService');
const { protect } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/create-payment-intent', protect, async (req, res) => {
  try {
    const { amount, currency, metadata } = req.body;
    const paymentIntent = await createPaymentIntent(amount, currency, metadata);
    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

