'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CartPublications extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      CartPublications.belongsTo(models.Cart)
      CartPublications.belongsTo(models.Publication)
    }
  }
  CartPublications.init({
    cartId: DataTypes.STRING,
    publicationId: DataTypes.STRING,
    quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'CartPublications',
  });
  return CartPublications;
};