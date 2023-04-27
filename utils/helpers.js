
// Import the required libraries and modules
const Card = require('../models/Card');
const dayjs = require('dayjs');
const { supermemo } = require('supermemo');

// Helper function to create new cards and assign the is_queued, interval, repetition, and e_factor.
async function createCard(deck_id, front, back) {
  const newCard = await Card.create({
    deck_id,
    front,
    back,
    is_queued: true,
    interval: 0,
    repetition: 0,
    e_factor: 2.5,
  });

  return newCard;
}

// Checks if cards are ready for review
async function getCardsReadyForReview(deckId) {
  // Retrieve cards using cardIds
  const cards = await Card.findAll({ where: { id: deckId } });

  if (!cards) {
    throw new Error('No cards found');
  }

  // Filter cards that are ready for review
  const cardsReadyForReview = cards.filter((card) => {
    return dayjs().isSameOrAfter(dayjs(card.dueDate));
  });

  return cardsReadyForReview;
}

// Updates a card once it has been reviewed to set the next review date. This update is based on the rating provided by the user.
async function practicedCard(cardId, grade) {
  const card = await Card.findByPk(cardId);

  if (!card) {
    throw new Error('Card not found');
  }

  const { interval, repetition, efactor } = supermemo(card, grade);
  const dueDate = dayjs(Date.now()).add(interval, 'day').toISOString();

  card.interval = interval;
  card.repetition = repetition;
  card.e_factor = efactor;
  card.is_queued = dayjs().isBefore(dayjs(dueDate));

  await card.save();
}

module.exports = {
  createCard,
  practicedCard,
  getCardsReadyForReview,
  Flashcard,
  practice,
  isCardDue,

  placeholder: () => {
    // replace with real helpers if needed.
    console.log("this is just a placeholder.");
  },

  withAuth: (req, res, next) => {
    if (!req.session.logged_in) {
      res.redirect('/login');
    } else {
      next();
    }
  },

  checkAuth: (req, res, next) => {
    req.isAuthenticated = (req.session.logged_in);
    next();
  },

};