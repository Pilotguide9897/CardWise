const router = require('express').Router();

const deckRoutes = require('./deck-routes');
const userRoutes = require('./user-routes');
const testRoutes = require('./test-routes');

router.use('/decks', deckRoutes);
router.use('/users', userRoutes);
router.use('/test', testRoutes);

module.exports = router;
