// resumeParser.js

const pdfParse = require('pdf-parse');
const fs = require('fs');

/**
 * Parse Resume (PDF Only Example)
 */
const parseResume = async (filePath) => {
  const buffer = fs.readFileSync(filePath);
  const data = await pdfParse(buffer);

  // Simple keyword extraction
  const text = data.text;
  return {
    rawText: text,
    name: extractName(text),
    email: extractEmail(text),
    skills: extractSkills(text)
  };
};

const extractName = (text) => {
  const match = text.match(/Name[:\s]+(.+)/i);
  return match ? match[1].trim() : null;
};

const extractEmail = (text) => {
  const match = text.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Z]{2,}/i);
  return match ? match[0] : null;
};

const extractSkills = (text) => {
  const skillsList = ['JavaScript', 'React', 'Node.js', 'MongoDB', 'Python', 'Java'];
  return skillsList.filter(skill => text.toLowerCase().includes(skill.toLowerCase()));
};

module.exports = { parseResume };
