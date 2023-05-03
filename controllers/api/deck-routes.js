const router = require('express').Router();
const { Deck, Card } = require('../../models');
const { updateSupermemoInfo, withAuth } = require('../../utils/helpers');
const { randomlyChooseCardsToQueue } = require('../../utils/update-queues');

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
        exclude: ['user_id', 'createdAt', 'updatedAt'],
      },
      include: {
        model: Card,
        attributes: {
          exclude: [
            'deck_id',
            'interval',
            'repetition',
            'efactor',
            'createdAt',
            'updatedAt',
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
    let newDeckData = {
      user_id: req.session.user_id,
      description: req.body.description,
    };

    // only add properties to the object that have a value.
    // this lets the db assign default values when no value is assigned.
    for (const key in req.body) {
      if (Object.hasOwnProperty.call(req.body, key)) {
        const element = req.body[key];
        if (element && key !== 'cueCardData') {
          newDeckData[key] = element;
        }
      }
    }

    // update deck properties.
    const deckData = await Deck.update(newDeckData, {
      where: {
        id: req.params.id,
      },
    });
    // get all cards associated to with this deck from the db.
    let currentCards = await Card.findAll({
      where: { deck_id: req.params.id },
    });
    currentCards = currentCards.map((card) => card.get({ plain: true }));

    // Make a list of cards that exist in currentCards that
    // but are missing from req.body.cards.
    const cardsToDelete = currentCards.filter(
      (card) =>
        !req.body.cueCardData.some((newCard) => Number(newCard.id) === card.id)
    );
    // create a list of the card ids to be used for bulk destoy.
    const cardsToDeleteIds = cardsToDelete.map((card) => card.id);
    if (cardsToDeleteIds.length > 0) {
      await Card.destroy({ where: { id: cardsToDeleteIds } });
    }

    let cardQueue = [];
    req.body.cueCardData.forEach((newCard) => {
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
          efactor: 2.5,
        });
      }
    });

    await Card.bulkCreate(cardQueue, {
      updateOnDuplicate: [
        'front',
        'back',
        'sm_interval',
        'sm_repetition',
        'sm_efactor',
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
    // setting up new deck data object
    let newDeckData = {
      user_id: req.session.user_id,
    };

    // only add properties to the object that have a value.
    // this lets the db assign default values when no value is assigned.
    for (const key in req.body) {
      if (Object.hasOwnProperty.call(req.body, key)) {
        const element = req.body[key];
        if (element) {
          newDeckData[key] = element;
        }
      }
    }

    const deckData = await Deck.create(newDeckData);

    const newCardData = req.body.cueCardData.map((card) => {
      return {
        ...card,
        deck_id: deckData.id,
        interval: 0,
        repetition: 0,
        efactor: 2.5,
      };
    });

    const numberOfCardsToQueue = !newDeckData.newCardsPerDay
      ? 10
      : newDeckData.newCardsPerDay;
    const theChosenOnes = randomlyChooseCardsToQueue(
      numberOfCardsToQueue,
      newCardData.length
    );

    theChosenOnes.forEach((id) => {
      newCardData.forEach((card, index) => {
        if (id === index) {
          card.is_queued = true;
        }
      });
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
      },
    });

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

// Get queued cards for a single deck (A am making this because I do not want to mess with your route above, but I need to be able to access the updated at property to know which cards, have been in the queue the longest. Just in case case users have missed a few days of review and their queue is longer than the number of cards per day that they have set to review).
router.get('/review/:id', async (req, res) => {
  if (req.session.logged_in) {
    let plainCardsUpForReview = [];
    try {
      if (req.params.id.toLowerCase() === 'all') {
        const allDecks = await Deck.findAll({
          include: [{ model: Card }],
          where: {
            user_id: req.session.user_id,
          },
        });

        const decks = allDecks.map((deck) => deck.get({ plain: true }));

        decks.forEach((deck) => {
          deck.cards.forEach((card) => {
            if (card.is_queued) {
              plainCardsUpForReview.push(card);
            }
          });
        });
      } else {
        const cardsUpForReview = await Card.findAll({
          where: {
            deck_id: req.params.id,
            is_queued: true,
          },
        });

        plainCardsUpForReview = cardsUpForReview.map((card) =>
          card.get({ plain: true })
        );
      }

      res.json(plainCardsUpForReview);
    } catch (error) {
      console.error('Error fetching cards up for review:', error);
      res.status(500).json({ message: 'Error fetching cards up for review' });
    }
  } else {
    res.status(401).json({ message: 'Not logged in' });
  }
});

router.put('/review/:id', withAuth, async (req, res) => {
  if (req.session.logged_in) {
    const { card, grade } = req.body;
    const newCardData = await updateSupermemoInfo(card, grade);

    try {
      const updateWithSequelize = await Card.update(
        {
          is_queued: false,
          interval: newCardData.interval,
          repetition: newCardData.repetition,
          efactor: newCardData.efactor,
        },
        {
          where: { id: req.params.id },
        }
      );

      if (updateWithSequelize[0] > 0) {
        res.sendStatus(200);
      } else {
        res.sendStatus(400);
      }
    } catch (err) {
      console.error({
        message: 'there was a problem updating the card',
        error: err,
      });
      res.sendStatus(500);
    }
  } else {
    res.status(403);
  }
});

module.exports = router;
