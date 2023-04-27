const User = require('./User');
const Deck = require('./Deck');
const Card = require('./Card');

User.hasMany(Deck);

Deck.belongsTo(User);

Deck.hasMany(Card, {
  foreignKey: 'deck_id',
  onDelete: 'CASCADE',
});

Card.belongsTo(Deck, {
  foreignKey: 'deck_id',
});

module.exports = { User, Deck, Card };
