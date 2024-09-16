const express = require('express');
const app = express();
const connectDB = require('./config/database'); 
const bookRoutes = require('./routes/booksRoute');
const errorHandler = require('./middleware/errorHandler');
require('dotenv').config();

// Connect to the database
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/books', bookRoutes);

// Error Handling Middleware
app.use(errorHandler);

module.exports = app;
