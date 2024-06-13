// jobs.js
const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { verifyToken } = require('./auth');

router.get('/user/:userId/jobs', async (req, res) => {
    const userId = parseInt(req.params.userId);
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    const token = authHeader.split(' ')[1];
    try {
        const decoded = verifyToken(token);
        if (decoded.id !== userId) {
            return res.status(403).json({ error: 'Forbidden' });
        }

        const jobs = await prisma.job.findMany({
            where: {
                userId: userId,
            },
        });
        res.json(jobs);
    } catch (error) {
        res.status(401).json({ error: 'Invalid token' });
    }
});

module.exports = router;
