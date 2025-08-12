// uploadVideo.js

const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: 'uploads/videos/',
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  const ext = path.extname(file.originalname).toLowerCase();
  if (['.mp4', '.mov', '.avi', '.mkv'].includes(ext)) {
    cb(null, true);
  } else {
    cb(new Error('Only video files are allowed'), false);
  }
};

module.exports = multer({ storage, fileFilter });
