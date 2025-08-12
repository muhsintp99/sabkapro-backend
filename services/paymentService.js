// paymentService.js

// const Razorpay = require('razorpay');

// const razorpay = new Razorpay({
//   key_id: process.env.RAZORPAY_KEY_ID,
//   key_secret: process.env.RAZORPAY_KEY_SECRET
// });

// /**
//  * Create Order
//  */
// const createOrder = async (amount, currency = 'INR', receipt = 'receipt#1') => {
//   const options = {
//     amount: amount * 100, // in paise
//     currency,
//     receipt
//   };
//   return await razorpay.orders.create(options);
// };

// module.exports = { createOrder };



const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

/**
 * Create Payment Intent
 */
const createPaymentIntent = async (amount, currency = 'usd', metadata = {}) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // Stripe uses cents
      currency,
      metadata
    });
    return paymentIntent;
  } catch (error) {
    console.error('❌ Stripe Payment Intent Error:', error.message);
    throw new Error('Unable to create payment intent');
  }
};

/**
 * Refund Payment
 */
const refundPayment = async (paymentIntentId) => {
  try {
    const refund = await stripe.refunds.create({
      payment_intent: paymentIntentId
    });
    return refund;
  } catch (error) {
    console.error('❌ Stripe Refund Error:', error.message);
    throw new Error('Unable to process refund');
  }
};

module.exports = {
  createPaymentIntent,
  refundPayment
};

