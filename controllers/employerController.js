// employerController.js


const Employer = require('../models/Employer');

const getEmployers = async (req, res) => {
  try {
    const employers = await Employer.find().populate('assignedStaff', 'fullName email');
    res.json(employers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createEmployer = async (req, res) => {
  try {
    const employer = await Employer.create(req.body);
    res.status(201).json(employer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getEmployerById = async (req, res) => {
  try {
    const employer = await Employer.findById(req.params.id).populate('assignedStaff', 'fullName email');
    if (!employer) return res.status(404).json({ message: 'Employer not found' });
    res.json(employer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateEmployer = async (req, res) => {
  try {
    const employer = await Employer.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(employer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteEmployer = async (req, res) => {
  try {
    await Employer.findByIdAndDelete(req.params.id);
    res.json({ message: 'Employer deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getEmployers, createEmployer, getEmployerById, updateEmployer, deleteEmployer };
