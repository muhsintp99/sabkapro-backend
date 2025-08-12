// candidateRoutes.js


const express = require('express');
const uploadResume = require('../middlewares/uploadResume');
const { getCandidates, createCandidate, getCandidateById, updateCandidate, deleteCandidate } = require('../controllers/candidateController');
const { protect, authorizeRoles } = require('../middlewares/authMiddleware');

const router = express.Router();

router.route('/')
  .get(protect, authorizeRoles('admin', 'staff_hr'), getCandidates)
  .post(uploadResume.single('resume'), createCandidate);

router.route('/:id')
  .get(protect, getCandidateById)
  .put(protect, authorizeRoles('admin', 'staff_hr'), updateCandidate)
  .delete(protect, authorizeRoles('admin'), deleteCandidate);

module.exports = router;
