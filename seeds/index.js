const sequelize = require("../config/connection");
const { User, Card } = require("../models");

const userData = require("./userData.json");
const cardData = require("./cardData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Card.bulkCreate(cardData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
