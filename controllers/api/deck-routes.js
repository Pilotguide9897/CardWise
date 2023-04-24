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
// batch update cards

// deleting a deck
router.delete('/:id', async (req, res) => {
  try {
    const deckData = await Deck.destroy({
      where: {
        id: req.params.id,
        // user_id: req.session.user_id,
      },
    });

    console.log(deckData);

    if (!deckData) {
      res.status(400).json({ message: 'No Deck found with that id.' });
      return;
    }

    res.json({ message: 'Deck deleted successfully.', data: deckData });
  } catch (err) {
    console.error({
      message: 'There was an error deleting the Deck',
      error: err,
    });
    res
      .status(500)
      .json({ message: 'There was an error deleting the Deck', error: err });
  }
});

// Getting a single deck.

// Updating reviewed cards.

module.exports = router;
