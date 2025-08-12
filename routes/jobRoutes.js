// jobRoutes.js


const express = require('express');
const { getJobs, createJob, getJobById, updateJob, deleteJob } = require('../controllers/jobController');
const { protect, authorizeRoles } = require('../middlewares/authMiddleware');

const router = express.Router();

router.route('/')
  .get(getJobs)
  .post(protect, authorizeRoles('employer', 'admin'), createJob);

router.route('/:id')
  .get(getJobById)
  .put(protect, authorizeRoles('employer', 'admin'), updateJob)
  .delete(protect, authorizeRoles('employer', 'admin'), deleteJob);

module.exports = router;
