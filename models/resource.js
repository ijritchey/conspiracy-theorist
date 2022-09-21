'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class resource extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.resource.belongsTo(models.conspiracy)   
    }
  }
  resource.init({
    conspiracyId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    content: DataTypes.TEXT,
    url: DataTypes.STRING,
    img: DataTypes.STRING,
    published: DataTypes.DATE,
    sourceName: DataTypes.STRING,
    sourceUrl: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'resource',
  });
  return resource;
};