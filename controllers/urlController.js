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
