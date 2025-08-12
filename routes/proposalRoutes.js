// proposalRoutes.js


const express = require('express');
const { getProposals, createProposal, getProposalById, updateProposal, deleteProposal } = require('../controllers/proposalController');
const { protect, authorizeRoles } = require('../middlewares/authMiddleware');

const router = express.Router();

router.route('/')
  .get(protect, authorizeRoles('admin', 'staff_sales'), getProposals)
  .post(protect, authorizeRoles('admin', 'staff_sales'), createProposal);

router.route('/:id')
  .get(protect, authorizeRoles('admin', 'staff_sales'), getProposalById)
  .put(protect, authorizeRoles('admin', 'staff_sales'), updateProposal)
  .delete(protect, authorizeRoles('admin'), deleteProposal);

module.exports = router;
