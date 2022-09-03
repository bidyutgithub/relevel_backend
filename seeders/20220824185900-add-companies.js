'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Companies', [{
      name: 'Microsoft',
      createdAt: new Date(),
      updatedAt: new Date()
     },{
      name:'Tata',
      createdAt: new Date(),
      updatedAt: new Date()
     },{
      name:'Reliance',
      createdAt: new Date(),
      updatedAt: new Date()
     }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Companies', null, {});

    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
