const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Deck extends Model {}

Deck.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    new_cards_per_day: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'deck',
  }
);

module.exports = Deck;
