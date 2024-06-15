const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// POST /users
router.post('/', async (req, res) => {
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
        console.error('Error creating user:', error.message);
        if (error.meta && error.meta.target) {
            // This is a Prisma specific error, e.g., unique constraint violation
            res.status(400).json({ error: 'A user with this email already exists.' });
        } else {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
});

module.exports = router;
