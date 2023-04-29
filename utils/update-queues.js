const { Card } = require('../../models');

const updateDeckQueues = async () => {
  // get all cards that are not queued.
  const cardData = Card.findAll({
    where: {
      is_queued: false,
    },
  });
  // get number of days from atUpdated to today.
  // if card.interval is less than the number of days
  // set is_queued to true.

  console.log(cardData);
};

updateDeckQueues();
