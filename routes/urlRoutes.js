const express = require('express');
const router = express.Router();
const urlController = require('../controllers/urlControllers');

router.post('/shorten', urlController.createShortUrl);
router.get('/shorten/:shortCode', urlController.getShortUrl);
router.put('/shorten/:shortCode', urlController.updateShortUrl);
router.delete('/shorten/:shortCode', urlController.deleteShortUrl);
router.get('/shorten/:shortCode/stats', urlController.getUrlStats);

module.exports = router;
