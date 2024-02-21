import express from 'express';

const router = express.Router()

router.get('/produto', (req, res) => {
    res.json(
        [
            { codigo: 1 },
            { codigo: 2 },
            { codigo: 3 },
            { codigo: 4 },
            { codigo: 5 },
        ]
    );
});

export default router;