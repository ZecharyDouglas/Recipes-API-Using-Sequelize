"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(`Recipes`, [
      {
        title: `Sample Recipe Title`,
        description: `Sample Recipe Description`,
        ingredients: `Sample Recipe Ingredients`,
        instructions: `Sample Recipe Instructions`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete(`Recipes`, null, {});
  },
};
