'use strict';

module.exports = {
  up (queryInterface, Sequelize) {
    return queryInterface.createColumn('Troops', "commanderId", Sequelize.INTEGER);
  },

  down (queryInterface, Sequelize) {
     return queryInterface.removeColumn('Troops', "commanderId", Sequelize.INTEGER);
  }
};
