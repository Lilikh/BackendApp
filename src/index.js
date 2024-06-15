const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables from .env file

const app = express();
const port = process.env.PORT || 3000;
const prisma = new PrismaClient();

// Configure CORS to allow requests from your frontend
const corsOptions = {
  origin: ['http://localhost:5173', 'https://backendapp-lej6.onrender.com'], // Update this with your frontend URLs
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // Enable cookies to be sent with requests
  optionsSuccessStatus: 204
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Simple route to check server status
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Routes
app.use('/users', require('./users')); // Adjust the path as necessary
app.use('/jobs', require('./jobs')); // Adjust the path as necessary

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
