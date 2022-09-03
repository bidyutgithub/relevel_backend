'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
        name: 'bidyut sahoo',
        createdAt: new Date(),
        updatedAt: new Date()
       },{
        name:'sathi sahoo',
        createdAt: new Date(),
        updatedAt: new Date()
       },{
        name:'goutam sahoo',
        createdAt: new Date(),
        updatedAt: new Date()
       }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
