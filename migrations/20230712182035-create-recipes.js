"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Recipes", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          len: {
            args: [3],
            msg: "Title must be at least 3 characters long",
          },
        },
      },
      description: {
        type: Sequelize.TEXT,
        validate: {
          len: {
            args: [0, 500],
            msg: "Description must be at most 500 characters long",
          },
        },
      },
      ingredients: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
          len: {
            args: [500, 1000],
            msg: "Description must be at most 1000 characters long",
          },
        },
      },
      instructions: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
          len: {
            args: [0, 5000],
            msg: "Description must be at most 5000 characters long",
          },
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        validate: {
          isDate: true,
        },
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        validate: {
          isDate: true,
        },
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Recipes");
  },
};
