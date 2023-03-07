'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Beers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Beers.hasOne(models.Brands)
    }
  }
  Beers.init({
    name: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false
    },
    graduation: {
      type: DataTypes.FLOAT(3,1),
      allowNull: false
    },
    origin: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    score: {
      type: DataTypes.FLOAT(2,1),
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Beers',
    tableName: 'beers'
  });
  return Beers;
};