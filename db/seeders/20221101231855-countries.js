'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
     
    
 
     await queryInterface.bulkInsert('Countries', [
      {
        //no va el id porque lo genera el gestor de bd, solo se pone lo necesario
        "name":"Argentina",
        "createdAt": "2022-10-17 11:33:00",
        "updatedAt": "2022-10-17 11:33:00",
       },
       {
        "name":"Germany",
        "createdAt": "2022-10-17 11:33:00",
        "updatedAt": "2022-10-17 11:33:00",
       },
       {
        "name":"Mexico",
        "createdAt": "2022-10-17 11:33:00",
        "updatedAt": "2022-10-17 11:33:00",
       },
       {
        "name":"Spain",
        "createdAt": "2022-10-17 11:33:00",
        "updatedAt": "2022-10-17 11:33:00",
       },
       
     ], {});
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
