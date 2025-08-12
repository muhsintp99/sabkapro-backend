// courseRoutes.js


const express = require('express');
const uploadVideo = require('../middlewares/uploadVideo');
const { getCourses, createCourse, getCourseById, updateCourse, deleteCourse } = require('../controllers/courseController');
const { protect, authorizeRoles } = require('../middlewares/authMiddleware');

const router = express.Router();

router.route('/')
  .get(getCourses)
  .post(protect, authorizeRoles('admin'), uploadVideo.array('videos'), createCourse);

router.route('/:id')
  .get(getCourseById)
  .put(protect, authorizeRoles('admin'), updateCourse)
  .delete(protect, authorizeRoles('admin'), deleteCourse);

module.exports = router;
