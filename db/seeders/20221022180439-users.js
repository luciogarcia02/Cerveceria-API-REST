'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        "firstName": "Juan",
        "lastName": "Perez",
        "email": "juanperez@mail.com",
        "password": "123456",
        "createdAt": "2022-11-01 20:18:00",
        "updatedAt": "2022-11-01 20:18:00",

      },
      {
        "firstName": "Maria",
        "lastName": "Perez",
        "email": "mariaperez@mail.com",
        "password": "123456",
        "createdAt": "2022-11-01 20:18:00",
        "updatedAt": "2022-11-01 20:18:00",
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Users', null, {});
  }
};
