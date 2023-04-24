const router = require('express').Router();
const { Deck, Card } = require('../../models');

// Getting all decks
router.get('/', async (req, res) => {
  try {
    const deckData = await Deck.findAll({
      include: { model: Card },
    });

    if (!deckData) {
      res.status(400).json({ message: 'Unable to locate decks.' });
      return;
    }

    const decks = deckData.map((deck) => {
      return deck.get({ plain: true });
    });

    res.json(decks);
  } catch (err) {
    console.error({
      message: 'There was an error getting all decks.',
      error: err,
    });
    res
      .status(500)
      .json({ message: 'There was an error getting all decks.', error: err });
  }
});

// Updating a deck

// deleting a deck

// Getting a single deck.

// Updating reviewed cards.

module.exports = router;
