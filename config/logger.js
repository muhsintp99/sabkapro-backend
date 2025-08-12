const { createLogger, transports, format } = require('winston');
const moment = require('moment'); // install: npm install moment

const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp({
      format: () => moment().format('DD-MM-YYYY HH:mm:ss')
    }),
    format.printf(info => `[${info.timestamp}] ${info.level.toUpperCase()}: ${info.message}`)
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: 'logs/error.log', level: 'error' }),
    new transports.File({ filename: 'logs/combined.log' })
  ]
});

module.exports = logger;
