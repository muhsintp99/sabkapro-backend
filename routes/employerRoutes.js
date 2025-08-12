// employerRoutes.js


const express = require('express');
const { getEmployers, createEmployer, getEmployerById, updateEmployer, deleteEmployer } = require('../controllers/employerController');
const { protect, authorizeRoles } = require('../middlewares/authMiddleware');

const router = express.Router();

router.route('/')
  .get(protect, authorizeRoles('admin', 'staff_hr'), getEmployers)
  .post(createEmployer);

router.route('/:id')
  .get(protect, getEmployerById)
  .put(protect, authorizeRoles('admin', 'staff_hr'), updateEmployer)
  .delete(protect, authorizeRoles('admin'), deleteEmployer);

module.exports = router;
