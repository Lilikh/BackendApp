// users.js or similar
const express = require('express');
const router = express.Router();
const { PrismaClient, Prisma } = require('@prisma/client');
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
        console.error('Error creating user:', error);
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            return res.status(400).json({ error: 'Invalid data provided' });
        } else {
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }
});

module.exports = router;
