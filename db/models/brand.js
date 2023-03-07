'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Brand extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Brand.belongsTo (models.Country, {
        foreignKey: 'country',
      })
      
    }
  }
  Brand.init({

    name: {
      type: DataTypes.STRING(40),
      allowNull:false
    },
    country: {
      type: DataTypes.STRING,
      allowNull:false
    },
    logo: {
      type: DataTypes.STRING,
      allowNull:false
    }

  }, {
    sequelize,
    modelName: 'Brand',
  });

  
  return Brand;
};