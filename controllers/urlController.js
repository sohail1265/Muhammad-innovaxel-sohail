const URL = require('../models/urlModel');
const { nanoid } = require('nanoid'); // For generating unique shortcodes

// Create short URL
exports.createShortUrl = async (req, res) => {
    const { url } = req.body;
    if (!url) return res.status(400).send({ error: 'URL is required' });

    const shortCode = nanoid(6);
    const newUrl = new URL({ url, shortCode });

    await newUrl.save();
    res.status(201).send(newUrl);
};

// Get short URL
exports.getShortUrl = async (req, res) => {
    const { shortCode } = req.params;
    const record = await URL.findOne({ shortCode });

    if (!record) return res.status(404).send({ error: 'Short URL not found' });

    // Increment access count
    record.accessCount += 1;
    await record.save();

    res.send(record);
};

// Update short URL
exports.updateShortUrl = async (req, res) => {
    const { shortCode } = req.params;
    const { url } = req.body;

    const record = await URL.findOneAndUpdate(
        { shortCode },
        { url, updatedAt: Date.now() },
        { new: true }
    );

    if (!record) return res.status(404).send({ error: 'Short URL not found' });

    res.send(record);
};
