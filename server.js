//server.js

const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const errorHandler = require('./middlewares/errorMiddleware');
const logger = require('./utils/logger');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

// Init app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static folder for file uploads
app.use('/uploads', express.static('uploads'));

// Logger
logger.info('🚀 Server initialization started...');

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/leads', require('./routes/leadRoutes'));
app.use('/api/candidates', require('./routes/candidateRoutes'));
app.use('/api/employers', require('./routes/employerRoutes'));
app.use('/api/jobs', require('./routes/jobRoutes'));
app.use('/api/proposals', require('./routes/proposalRoutes'));
app.use('/api/payments', require('./routes/paymentRoutes'));
app.use('/api/courses', require('./routes/courseRoutes'));
app.use('/api/ats', require('./routes/atsRoutes'));
app.use('/api/users', require('./routes/userRoutes'));

// Health check route
app.get('/', (req, res) => {
  res.send('✅ Sabka Pro Backend is running...');
});

// Error handler
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  logger.info(`✅ Server running on port ${PORT}`);
});
