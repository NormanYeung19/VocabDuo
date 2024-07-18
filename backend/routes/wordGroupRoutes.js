const express = require('express');
const router = express.Router();
const WordGroup = require('../models/WordGroup');

// Fetch all word groups
router.get('/', async (req, res) => {
    try {
        const wordGroups = await WordGroup.find();
        res.json(wordGroups);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

// Update a word's status
router.post('/update-word', async (req, res) => {
    const { groupId, word, status } = req.body;

    try {
        const group = await WordGroup.findOne({ id: groupId });
        if (group) {
            const wordItem = group.words.find(w => w.word === word);
            if (wordItem) {
                wordItem.status = status;
                await group.save();
                res.sendStatus(200);
            } else {
                res.status(404).send('Word not found');
            }
        } else {
            res.status(404).send('Group not found');
        }
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

module.exports = router;
