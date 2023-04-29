const sequelize = require('../config/connection');
const { User, Card, Deck } = require('../models');

const userData = require('./userData');
const deckData = require('./deckData');
const cardData = require('./cardData');

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Deck.bulkCreate(deckData, {
    individualHooks: true,
    returning: true,
  });

  const newCardData = cardData.map((card) => {
    return {
      ...card,
      is_queued: false,
      interval: getRandomInt(5),
      repetition: 0,
      efactor: 2.5,
    };
  });

  await Card.bulkCreate(newCardData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
