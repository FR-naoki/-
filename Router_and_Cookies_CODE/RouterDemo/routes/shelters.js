const express = require('express');
const router = express.Router();

router.get('/shelters', (req, res) => {
    res.send(`all shelters`);
});

router.post('/shelters', (req, res) => {
    res.send(`create shelter`);
});

router.get('/shelters/:id', (req, res) => {
    res.send(`view shelter`);
});

router.get('/shelters/:id/edit', (req, res) => {
    res.send(`edit shelter`);
});


module.exports = router;