const express = require('express');
const router = express.Router();
const logger = require('../utils/logger');

router.post('/', (req, res) => {
  logger.info('Create rating');
  res.json({ message: 'Create rating endpoint - to be implemented' });
});

router.get('/:userId', (req, res) => {
  logger.info(`Fetch ratings for user: ${req.params.userId}`);
  res.json({ message: 'User ratings endpoint - to be implemented' });
});

module.exports = router;
