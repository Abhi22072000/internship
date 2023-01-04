'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("listviews",{ 
      id:
    {
        type: Sequelize.INTEGER(10),
        primaryKey:true,
        autoIncrement:true
    },
    first_name:
    {
        type:Sequelize.STRING(20),
    },
    last_name:
    {
        type: Sequelize.STRING(20),
    },
    email:
    {
        type: Sequelize.STRING(20)
    },
    avatar:
    {
      type:Sequelize.STRING(20),
    },
    createdAt:
    {
      type:Sequelize.date,
    },
    updatedAt:
    {
      type:Sequelize.date,
    }
  })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
