// helpers.js

const moment = require('moment');

// Format Date to DD-MM-YYYY HH:mm:ss
const formatDate = (date) => {
  return moment(date).format('DD-MM-YYYY HH:mm:ss');
};

// Send JSON Response
const sendResponse = (res, statusCode, success, message, data = {}) => {
  res.status(statusCode).json({ success, message, data });
};

module.exports = {
  formatDate,
  sendResponse
};
