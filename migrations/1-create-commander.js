'use strict';
module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable('Commanders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      nation: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.INTEGER
      },
      militaryForce: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down(queryInterface, Sequelize) {
    return queryInterface.dropTable('Commanders');
  }
};