'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Publications', [
      {
        name: "Publicacion 1",
        currency: "ARS",
        amount: 100,
        img: "http://img.jpg",
        description: "Esta es la primer publicacion",
        stock: 10,
        beer_id: 4,
        createdAt: "2022-11-01 20:18:00",
        updatedAt: "2022-11-01 20:18:00"
      },
      {
        name: "Publicacion 2",
        currency: "ARS",
        amount: 150,
        img: "http://img2.jpg",
        description: "Esta es otra publicacion",
        stock: 1,
        beer_id: 5,
        createdAt: "2022-11-01 20:19:00",
        updatedAt: "2022-11-01 20:19:00"
      },
      {
        name: "Publicacion 3",
        currency: "USD",
        amount: 60,
        img: "http://img3.jpg",
        description: "Esta es la última publicación",
        stock: 7,
        beer_id: 6,
        createdAt: "2022-11-01 20:18:00",
        updatedAt: "2022-11-01 20:18:00"
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Publications', null, {});
  }
};
