'use strict';
module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable('Troops', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      tribe: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      attackPower: {
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
    return queryInterface.dropTable('Troops');
  }
};