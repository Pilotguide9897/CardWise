const dayjs = require('dayjs');
const { Card, Deck } = require('../models');

// if number of cards to queue is less than total number of cards
// randomly choose which cards to queue. Otherwise return all cards.
const randomlyChooseCardsToQueue = (
  numberOfCardsToQueue,
  totalNumberOfCards
) => {
  let indices = [];
  let theChosenOnes = [];
  let remainingCards = totalNumberOfCards;
  // create pool of indices.
  for (let i = 0; i < totalNumberOfCards; i++) {
    indices.push(i);
  }

  if (numberOfCardsToQueue > totalNumberOfCards) {
    return indices;
  } else {
    // randomly choose an element from indices, that value is added to the queue.
    // remove that value from the pool and repeat until the number of new cards is reached
    for (let i = 0; i < numberOfCardsToQueue; i++) {
      const cardIndex = Math.floor(Math.random() * remainingCards);
      theChosenOnes.push(indices[cardIndex]);
      indices.splice(cardIndex, 1);
      --remainingCards;
    }
    return theChosenOnes;
  }
};

const updateDeckQueues = async () => {
  console.log('🤝 STARTING DECK QUEUE UPDATE.');
  let queue = [];
  // get all cards that are not queued.
  const deckData = await Deck.findAll({
    include: [
      {
        model: Card,
        where: { is_queued: false },
      },
    ],
  });
  const decks = deckData.map((deck) => deck.get({ plain: true }));

  decks.forEach((deck) => {
    const cards = deck.cards.filter((card) => {
      // convert udpatedAt to dayjs data obj.
      const lastUpdate = dayjs(card.updatedAt);
      // calculate number of days since last updated.
      const daysSinceLastUpdate = dayjs()
        .add(1, 'day')
        .diff(lastUpdate.startOf('day'), 'day');
      // if interval is <= number of days since last updated return card.
      return card.interval <= daysSinceLastUpdate;
    });

    const cardsToQueue = randomlyChooseCardsToQueue(
      deck.new_cards_per_day,
      cards.length
    );

    cardsToQueue.forEach((cardIndex) => {
      const queuedCard = cards[cardIndex];
      queuedCard.is_queued = true;
      queue.push(queuedCard);
    });
  });

  await Card.bulkCreate(queue, {
    updateOnDuplicate: ['is_queued'],
    individualHooks: true,
    returning: true,
  });
  console.log('✅ UPDATE COMPLETE.');
  // process.exit(0);
};

module.exports = { updateDeckQueues, randomlyChooseCardsToQueue };
