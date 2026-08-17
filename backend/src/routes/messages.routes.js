const express = require('express');
const router = express.Router();
const logger = require('../utils/logger');

router.get('/:rideId', (req, res) => {
  logger.info(`Fetch messages for ride: ${req.params.rideId}`);
  res.json({ message: 'Messages endpoint - to be implemented' });
});

module.exports = router;
