const router = require('express').Router();
const { updateDeckQueues } = require('../../utils/update-queues');
// const { practice } = require('../../utils/helpers');

// Utility end point, used to queue cards for testing.
router.get('/queue-decks', (req, res) => {
  updateDeckQueues();
  res.json('It probably worked, check the node console.');
});

module.exports = router;
