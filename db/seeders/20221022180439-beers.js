'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Beers', [
      {
        "name": 'Corona',
        "category": "rubia",
        "graduation":  4 ,
        "origin":  "USA" ,
        "score": 4,
        "createdAt": "2022-11-01 20:18:00",
        "updatedAt": "2022-11-01 20:18:00",
      },
      {
        "name": 'Patagonia 24/7',
        "category": "roja",
        "graduation":  5 ,
        "origin":  "Arg" ,
        "score": 4,
        "createdAt": "2022-11-01 20:18:00",
        "updatedAt": "2022-11-01 20:18:00"
      },
      {
        "name": 'Miller',
        "category": "Negra",
        "graduation":  4 ,
        "origin":  "Bel" ,
        "score": 3,
        "createdAt": "2022-11-01 20:18:00",
        "updatedAt": "2022-11-01 20:18:00",
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Beers', null, {});
  }
};
