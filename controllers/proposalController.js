// proposalController.js


const Proposal = require('../models/Proposal');

const getProposals = async (req, res) => {
  try {
    const proposals = await Proposal.find()
      .populate('candidateId', 'fullName email')
      .populate('generatedBy', 'fullName email');
    res.json(proposals);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createProposal = async (req, res) => {
  try {
    const proposal = await Proposal.create(req.body);
    res.status(201).json(proposal);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getProposalById = async (req, res) => {
  try {
    const proposal = await Proposal.findById(req.params.id)
      .populate('candidateId', 'fullName email')
      .populate('generatedBy', 'fullName email');
    if (!proposal) return res.status(404).json({ message: 'Proposal not found' });
    res.json(proposal);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateProposal = async (req, res) => {
  try {
    const proposal = await Proposal.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(proposal);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteProposal = async (req, res) => {
  try {
    await Proposal.findByIdAndDelete(req.params.id);
    res.json({ message: 'Proposal deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getProposals, createProposal, getProposalById, updateProposal, deleteProposal };
