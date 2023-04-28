const router = require('express').Router();
const { Deck, Card } = require('../../models');
const { practice} = require('../../utils/helpers')

// Get all decks
router.get('/', async (req, res) => {
  try {
    const deckData = await Deck.findAll({
      attributes: {
        exclude: ['user_id', 'userId', 'createdAt', 'updatedAt'],
      },
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
      attributes: {
        exclude: ['user_id', 'userId', 'createdAt', 'updatedAt'],
      },
      include: {
        model: Card,
        attributes: {
          exclude: [
            'deck_id',
            'is_queued',
            'interval',
            'repetition',
            'e_factor',
            'createdAt',
            'updatedAt',
            'deckId',
          ],
        },
      },
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

// Updating a deck and it's cards.
router.put('/:id', async (req, res) => {
  try {
    // update deck properties.
    const deckData = await Deck.update(
      {
        user_id: req.body.user_id,
        name: req.body.name,
        description: req.body.description,
        new_cards_per_day: req.body.new_cards_per_day,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    // get all cards associated to with this deck from the db.
    let currentCards = await Card.findAll({
      where: { deck_id: req.params.id },
    });
    currentCards = currentCards.map((card) => card.get({ plain: true }));

    // Make a list of cards that exist in currentCards that
    // but are missing from req.body.cards.
    const cardsToDelete = currentCards.filter(
      (card) => !req.body.cards.some((newCard) => newCard.id === card.id)
    );
    // create a list of the card ids to be used for bulk destoy.
    const cardsToDeleteIds = cardsToDelete.map((card) => card.id);
    if (cardsToDeleteIds.length > 0) {
      await Card.destroy({ where: { id: cardsToDeleteIds } });
    }

    let cardQueue = [];
    req.body.cards.forEach((newCard) => {
      // find card in both arrays with same id.
      let result = currentCards.find(
        (currentCard) => currentCard.id === newCard.id
      );
      let cardToProcess;
      if (result) {
        // if the new card front or back has been changed, add the card to the queue.
        if (newCard.front !== result.front || newCard.back !== result.back) {
          cardToProcess = newCard;
        }
      } else {
        // if there is no result, it's because this card is brand new.
        cardToProcess = newCard;
      }

      if (cardToProcess) {
        cardQueue.push({
          ...cardToProcess,
          deck_id: req.params.id,
          interval: 0,
          repetition: 0,
          e_factor: 2.5,
        });
      }
    });

    await Card.bulkCreate(cardQueue, {
      updateOnDuplicate: [
        'front',
        'back',
        'interval',
        'repetition',
        'e_factor',
      ],
      individualHooks: true,
      returning: true,
    });

    res.json({ message: 'Deck updated successfully.', data: deckData });
  } catch (err) {
    console.error({
      message: 'There was an error updating the deck.',
      error: err,
    });
    res
      .status(500)
      .json({ message: 'There was an error updating the deck.', error: err });
  }
});

// New Deck
router.post('/', async (req, res) => {
  try {
    const deckData = await Deck.create({
      user_id: req.body.user_id,
      name: req.body.name,
      description: req.body.description,
      new_cards_per_day: req.body.new_cards_per_day,
    });

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

// Need to add code to get the cards that are queued for review and review them.

// Call the practice function with a flashcard and grade
const updatedFlashcardData = practice(flashcard, grade);

// Update the original Card instance with the updated data
flashcard.interval = updatedFlashcardData.interval;
flashcard.repetition = updatedFlashcardData.repetition;
flashcard.efactor = updatedFlashcardData.efactor;
flashcard.dueDate = updatedFlashcardData.dueDate;

// Save the updated card information to the database
await flashcard.save();

module.exports = router;
