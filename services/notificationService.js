// notificationService.js

const { sendWhatsAppMessage } = require('./whatsappService');
const { sendWelcomeEmail } = require('./emailService');

/**
 * Send Notification (multi-channel)
 */
const sendNotification = async ({ email, phone, name, message }) => {
  if (email) {
    await sendWelcomeEmail(email, name);
  }
  if (phone) {
    await sendWhatsAppMessage(phone, message);
  }
};

module.exports = { sendNotification };
