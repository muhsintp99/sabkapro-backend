// whatsappService.js

const axios = require('axios');

/**
 * Send WhatsApp Message
 */
const sendWhatsAppMessage = async (phone, message) => {
  try {
    const apiUrl = `https://graph.facebook.com/v17.0/${process.env.WHATSAPP_PHONE_NUMBER_ID}/messages`;
    const payload = {
      messaging_product: 'whatsapp',
      to: phone,
      type: 'text',
      text: { body: message }
    };

    await axios.post(apiUrl, payload, {
      headers: {
        Authorization: `Bearer ${process.env.WHATSAPP_ACCESS_TOKEN}`,
        'Content-Type': 'application/json'
      }
    });

    console.log(`✅ WhatsApp message sent to ${phone}`);
  } catch (error) {
    console.error('❌ WhatsApp Send Error:', error.response?.data || error.message);
  }
};

module.exports = { sendWhatsAppMessage };
