const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    url: String,
    shortCode: { type: String, unique: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    accessCount: { type: Number, default: 0 },
});

module.exports = mongoose.model('URL', urlSchema);
