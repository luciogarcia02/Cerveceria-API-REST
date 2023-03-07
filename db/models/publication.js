'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Publication extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Publication.hasMany(models.CartPublications)
    }
  }
  Publication.init({
    name: {
      allowNull: false,
      type: DataTypes.STRING(40),
      validate: {
        len: [2,40]
      }
    },
    currency: {
      allowNull: false,
      type: DataTypes.STRING(3),
      validate: {
        len: 3,
        isAlpha: true
      }
    },
    amount: {
      allowNull: false,
      type: DataTypes.FLOAT(8,2)
    },
    img: {
      allowNull: false,
      type: DataTypes.STRING
    },
    description: {
      allowNull: false,
      type: DataTypes.STRING
    },
    stock: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    beer_id: {
      allowNull: false,
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'Publication',
    tableName: 'Publications'
  });
  return Publication;
};