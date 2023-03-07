'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('Brands', [
       {
        //no va el id porque lo genera el gestor de bd, solo se pone lo necesario
        "name":"Corona",
        "country":"1",
        "logo":"https://1000marcas.net/wp-content/uploads/2019/12/logo-Corona-500x354.png",
        "createdAt": "2022-10-17 11:33:00",
        "updatedAt": "2022-10-17 11:33:00",
       },
       {
        "name":"Quilmes",
        "country":"2",
        "logo":"https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/072012/quilmes.jpg?itok=3ap36FAB",
        "createdAt": "2022-10-17 11:33:00",
        "updatedAt": "2022-10-17 11:33:00",
        },
     ], {});

  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('Brands', null, {});
     
  }
};
