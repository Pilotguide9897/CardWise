const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Card extends Model {}

Card.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    deck_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'deck',
        key: 'id',
      },
    },
    front: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    back: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    is_queued: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: true,
    },
    interval: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'sm_interval',
    },
    repetition: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'sm_repetition',
    },
    efactor: {
      type: DataTypes.FLOAT,
      allowNull: false,
      field: 'sm_efactor',
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'card',
  }
);

module.exports = Card;
