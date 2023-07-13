"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Recipes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Recipes.init(
    {
      title: {
        type: DataTypes.STRING,
        validate: {
          len: {
            args: [5, 50],
            msg: "Title must be a minimum of 5 to maximum of 50 characters",
          },
        },
      },
      description: {
        type: DataTypes.TEXT,
        validate: {
          len: {
            args: [5, 500],
            msg: "Description must be a minimum of 5 to maximum of 500 characters",
          },
        },
      },
      ingredients: {
        type: DataTypes.TEXT,
        validate: {
          len: {
            args: [5, 1000],
            msg: "Ingredients list must be a minimum of 5 to maximum of 1000 characters",
          },
        },
      },
      instructions: {
        type: DataTypes.TEXT,
        validate: {
          len: {
            args: [5, 5000],
            msg: "Instructions list must be a minimum of 5 to maximum of 5000 characters",
          },
        },
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Recipes",
    }
  );
  return Recipes;
};
