const User = require('./User');
const Deck = require('./Deck');
const Card = require('./Card');

User.hasMany(Deck);

Deck.belongsTo(User);

Deck.hasMany(Card);

Card.belongsTo(Deck);

module.exports = { User, Deck, Card };
