// leadRoutes.js

const express = require('express');
const { getLeads, createLead, getLeadById, updateLead, deleteLead } = require('../controllers/leadController');
const { protect, authorizeRoles } = require('../middlewares/authMiddleware');

const router = express.Router();

router.route('/')
  .get(protect, authorizeRoles('admin', 'staff_sales'), getLeads)
  .post(protect, authorizeRoles('admin', 'staff_sales'), createLead);

router.route('/:id')
  .get(protect, authorizeRoles('admin', 'staff_sales'), getLeadById)
  .put(protect, authorizeRoles('admin', 'staff_sales'), updateLead)
  .delete(protect, authorizeRoles('admin'), deleteLead);

module.exports = router;
