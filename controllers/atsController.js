// atsController.js


const ATS = require('../models/ATS');

const getATSRecords = async (req, res) => {
  try {
    const records = await ATS.find()
      .populate('candidateId', 'fullName email')
      .populate('jobAppliedFor', 'title');
    res.json(records);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createATSRecord = async (req, res) => {
  try {
    const record = await ATS.create(req.body);
    res.status(201).json(record);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getATSRecordById = async (req, res) => {
  try {
    const record = await ATS.findById(req.params.id)
      .populate('candidateId', 'fullName email')
      .populate('jobAppliedFor', 'title');
    if (!record) return res.status(404).json({ message: 'ATS record not found' });
    res.json(record);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateATSRecord = async (req, res) => {
  try {
    const record = await ATS.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(record);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteATSRecord = async (req, res) => {
  try {
    await ATS.findByIdAndDelete(req.params.id);
    res.json({ message: 'ATS record deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getATSRecords, createATSRecord, getATSRecordById, updateATSRecord, deleteATSRecord };
