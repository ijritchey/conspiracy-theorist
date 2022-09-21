'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class conspiracy extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.conspiracy.belongsTo(models.user)
      models.conspiracy.hasMany(models.resource)
    }
  }
  conspiracy.init({
    userId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    rating: DataTypes.INTEGER,
    isLive: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'conspiracy',
  });
  return conspiracy;
};