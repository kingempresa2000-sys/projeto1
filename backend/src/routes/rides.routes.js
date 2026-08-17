const express = require('express');
const router = express.Router();
const logger = require('../utils/logger');

router.post('/request', (req, res) => {
  logger.info('Request ride');
  res.json({ message: 'Request ride endpoint - to be implemented' });
});

router.post('/:rideId/accept', (req, res) => {
  logger.info(`Accept ride: ${req.params.rideId}`);
  res.json({ message: 'Accept ride endpoint - to be implemented' });
});

router.get('/active', (req, res) => {
  logger.info('Fetch active rides');
  res.json({ message: 'Active rides endpoint - to be implemented' });
});

router.get('/history', (req, res) => {
  logger.info('Fetch ride history');
  res.json({ message: 'Ride history endpoint - to be implemented' });
});

router.post('/:rideId/complete', (req, res) => {
  logger.info(`Complete ride: ${req.params.rideId}`);
  res.json({ message: 'Complete ride endpoint - to be implemented' });
});

module.exports = router;
