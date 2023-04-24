const router = require('express').Router();
const { Deck, Card } = require('../../models');

// Get all decks
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

// Get a single deck
router.get('/:id', async (req, res) => {
  try {
    const deckData = await Deck.findByPk(req.params.id, {
      include: { model: Card },
    });

    if (!deckData) {
      console.error({ message: 'A deck with that id does not exist' });
      res.status(400).json({ message: 'A deck with that id does not exist' });
      return;
    }
    const deck = deckData.get({ plain: true });

    res.json(deck);
  } catch (err) {
    console.error({
      message: 'there was a problem finding the deck',
      error: err,
    });
  }
});

// Updating a deck
// Update deck title/description
// batch update cards

// New Deck
router.post('/', async (req, res) => {
  try {
    const deckData = await Deck.create(
      {
        user_id: req.body.user_id,
        name: req.body.name,
        new_cards_per_day: req.body.new_cards_per_day,
      },
      {
        include: Card,
      }
    );

    const newCardData = req.body.cards.map((card) => {
      return {
        ...card,
        deck_id: deckData.id,
        interval: 0,
        repetition: 0,
        e_factor: 2.5,
      };
    });

    await Card.bulkCreate(newCardData, {
      individualHooks: true,
      returning: true,
    });

    res.json(deckData);
  } catch (err) {
    console.error({
      message: 'there was a problem creating the deck',
      error: err,
    });
    res
      .status(500)
      .json({ message: 'there was a problem creating the deck', error: err });
  }
});

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

module.exports = router;
