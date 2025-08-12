// candidateController.js


const Candidate = require('../models/Candidate');

const getCandidates = async (req, res) => {
  try {
    const candidates = await Candidate.find().populate('assignedStaff', 'fullName email');
    res.json(candidates);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createCandidate = async (req, res) => {
  try {
    const data = { ...req.body };
    if (req.file) {
      data.resume = req.file.path;
    }
    const candidate = await Candidate.create(data);
    res.status(201).json(candidate);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCandidateById = async (req, res) => {
  try {
    const candidate = await Candidate.findById(req.params.id).populate('assignedStaff', 'fullName email');
    if (!candidate) return res.status(404).json({ message: 'Candidate not found' });
    res.json(candidate);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateCandidate = async (req, res) => {
  try {
    const data = { ...req.body };
    if (req.file) {
      data.resume = req.file.path;
    }
    const candidate = await Candidate.findByIdAndUpdate(req.params.id, data, { new: true });
    res.json(candidate);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteCandidate = async (req, res) => {
  try {
    await Candidate.findByIdAndDelete(req.params.id);
    res.json({ message: 'Candidate deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getCandidates, createCandidate, getCandidateById, updateCandidate, deleteCandidate };
