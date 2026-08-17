const express = require('express');
const router = express.Router();
const logger = require('../utils/logger');

router.post('/process', (req, res) => {
  logger.info('Process payment');
  res.json({ message: 'Process payment endpoint - to be implemented' });
});

router.get('/history', (req, res) => {
  logger.info('Fetch payment history');
  res.json({ message: 'Payment history endpoint - to be implemented' });
});

module.exports = router;
