// users.js or similar
const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// POST /users/signup
router.post('/signup', async (req, res) => {
    // Implementation for user signup (create user) endpoint
    // Example:
    const { email, password } = req.body;

    try {
        const newUser = await prisma.user.create({
            data: {
                email,
                password,
            },
        });
        res.status(201).json(newUser);
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// GET /users/signup (optional, for frontend routing)
router.get('/signup', (req, res) => {
    // Example: Send back a simple response for GET requests
    res.send('GET request to /users/signup');
});

module.exports = router;
