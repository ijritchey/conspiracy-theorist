'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_conspiracy extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.user_conspiracy.belongsTo(models.user)
      models.user_conspiracy.hasMany(models.news_resource)
    }
  }
  user_conspiracy.init({
    userId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    rating: DataTypes.INTEGER,
    isLive: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'user_conspiracy',
  });
  return user_conspiracy;
};