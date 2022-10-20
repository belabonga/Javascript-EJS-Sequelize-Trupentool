'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Troop extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Troop.belongsTo(models.Commander)
    }
  }
  Troop.init({
    name: {
      type : DataTypes.STRING,
      validate : {
        notEmpty: { msg : "Name cannot be empty" }
      }
    },
    tribe: {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notEmpty: { msg : "Tribe cannot be empty" }
      }
    },
    type: {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notEmpty: { msg : "Type cannot be empty" }
      }
    },
    attackPower: {
      type : DataTypes.INTEGER,
      allowNull : false,
      validate : {
        notNull: { msg : "Attack Power cannot be empty" }
      }
    },
    commanderId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Troop',
  });
  return Troop;
};


