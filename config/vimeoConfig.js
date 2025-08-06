// vimeoConfig.js

const { Vimeo } = require('vimeo');
const {
  VIMEO_CLIENT_ID,
  VIMEO_CLIENT_SECRET,
  VIMEO_ACCESS_TOKEN,
} = require('./env');

const vimeoClient = new Vimeo(
  VIMEO_CLIENT_ID,
  VIMEO_CLIENT_SECRET,
  VIMEO_ACCESS_TOKEN
);

module.exports = vimeoClient;
