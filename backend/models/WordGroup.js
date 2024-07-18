const mongoose = require('mongoose');

const WordSchema = new mongoose.Schema({
    word: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: 'default'
    }
});

const WordGroupSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    words: [WordSchema]
});

module.exports = mongoose.model('WordGroup', WordGroupSchema);
