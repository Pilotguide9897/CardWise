const sequelize = require('../config/connection');
const { User, Card, Deck } = require('../models');

const userData = require('./userData');
const deckData = require('./deckData');
const cardData = require('./cardData');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate([userData[0]], {
    individualHooks: true,
    returning: true,
  });

  deckData.forEach((deck) => {
    deck.user_id = 1;
  });

  await Deck.bulkCreate(deckData, {
    individualHooks: true,
    returning: true,
  });

  const newCardData = cardData.map((card) => {
    return { ...card, interval: 0, repetition: 0, efactor: 2.5 };
  });

  await Card.bulkCreate(newCardData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
