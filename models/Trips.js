const { Model, DataTypes } = require('sequelize');
const Book = require('../Book');
const sequelize = require('../config/connection');

class Trip extends Model {} 

Trip.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    trip_budget: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    traveller_amount: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    traveller_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'traveller',
        key: 'id',
      }
    },
    location_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'location',
        key: "id"
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'trip'
  }
);

module.exports = Trip;