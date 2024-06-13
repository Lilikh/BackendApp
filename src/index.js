// index.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/users', require('./users'));
app.use('/jobs', require('./jobs'));

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
