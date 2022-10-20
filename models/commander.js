'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Commander extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    get titleName(){
      let x = ''
      let y = this.name
      if (this.militaryForce >= 0 && this.militaryForce <= 99) {x = 'Sergeant'}
      else if (this.militaryForce >= 100 && this.militaryForce <= 499) {x = "Major"}
      else if (this.militaryForce >= 500) {x = "General"}

      return `${x} ${y}`
    }

    static associate(models) {
      Commander.hasMany(models.Troop, { foreignKey : "commanderId" })
    }
  }
  Commander.init({
    name: DataTypes.STRING,
    nation: DataTypes.STRING,
    age: DataTypes.INTEGER,
    militaryForce: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Commander',
  });
  return Commander;
};