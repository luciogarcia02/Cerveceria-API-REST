'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Cart.hasMany(models.CartPublications, {foreignKey: "cartId"})
      Cart.belongsTo(models.User)
    }
  }
  Cart.init({
    userId: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Cart',
  });
  return Cart;
};