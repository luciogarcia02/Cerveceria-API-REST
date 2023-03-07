'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Beers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(40),
        allowNull: false
      },
      category: {
        type: Sequelize.STRING,
        allowNull: false
      },
      graduation: {
        type: Sequelize.FLOAT(3,1),
        allowNull: false
      },
      origin: {
        type: Sequelize.STRING(3),
        allowNull: false
      },
      score: {
        type: Sequelize.FLOAT(2,1),
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Beers');
  }
};