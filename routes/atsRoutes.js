// atsRoutes.js


const express = require('express');
const { getATSRecords, createATSRecord, getATSRecordById, updateATSRecord, deleteATSRecord } = require('../controllers/atsController');
const { protect, authorizeRoles } = require('../middlewares/authMiddleware');

const router = express.Router();

router.route('/')
  .get(protect, authorizeRoles('admin', 'staff_hr'), getATSRecords)
  .post(protect, authorizeRoles('admin', 'staff_hr'), createATSRecord);

router.route('/:id')
  .get(protect, authorizeRoles('admin', 'staff_hr'), getATSRecordById)
  .put(protect, authorizeRoles('admin', 'staff_hr'), updateATSRecord)
  .delete(protect, authorizeRoles('admin'), deleteATSRecord);

module.exports = router;
