// uploadResume.js

const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: 'uploads/resumes/',
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  const ext = path.extname(file.originalname).toLowerCase();
  if (['.pdf', '.doc', '.docx'].includes(ext)) {
    cb(null, true);
  } else {
    cb(new Error('Only PDF or Word documents are allowed'), false);
  }
};

module.exports = multer({ storage, fileFilter });
