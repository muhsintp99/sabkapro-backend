// uploadImage.js

const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: 'uploads/images/',
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  const ext = path.extname(file.originalname).toLowerCase();
  if (['.png', '.jpg', '.jpeg', '.gif', '.webp'].includes(ext)) {
    cb(null, true);
  } else {
    cb(new Error('Only images are allowed'), false);
  }
};

module.exports = multer({ storage, fileFilter });
