const router = require('express').Router();

const deckRoutes = require('./deck-routes');
const userRoutes = require('./user-routes');

router.use('/decks', deckRoutes);
router.use('/users', userRoutes);

module.exports = router;
