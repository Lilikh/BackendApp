// users.js
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
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
