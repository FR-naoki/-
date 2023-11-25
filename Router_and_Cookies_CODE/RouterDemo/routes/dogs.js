const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send(`all dogs`);
});

router.post('/', (req, res) => {
    res.send(`create dogs`);
});

router.get('/:id', (req, res) => {
    res.send(`view dogs`);
});

router.get('/:id/edit', (req, res) => {
    res.send(`edit dogs`);
});


module.exports = router;