'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('Carts', [
       {
        //no va el id porque lo genera el gestor de bd, solo se pone lo necesario
        "userId":"1",
        "createdAt": "2022-10-17 11:33:00",
        "updatedAt": "2022-10-17 11:33:00",
       }
     ], {});

   await queryInterface.bulkInsert('CartPublications', [
      {
       "cartId":"1",
       "publicationId":"1",
       "quantity": 1,
       "createdAt": "2022-10-17 11:33:00",
       "updatedAt": "2022-10-17 11:33:00",

      },
      {
         "cartId":"1",
         "publicationId":"2",
         "quantity": 1,
         "createdAt": "2022-10-17 11:33:00",
         "updatedAt": "2022-10-17 11:33:00",
  
        }
    ], {});

  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('Brands', null, {});
     
  }
};
