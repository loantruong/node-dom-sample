'use strict';

module.exports = (sequelize, DataTypes) => {

  const Recipe = sequelize.define('Recipe', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    description: DataTypes.TEXT,
    image: DataTypes.STRING,
    count: {
      type: DataTypes.INTEGER,
      validate: {
        min: 1,
        max: 12
      }
    }
  });

  Recipe.associate = (models) => {
    Recipe.belongsTo(models.Category);
  };

  return Recipe;
};