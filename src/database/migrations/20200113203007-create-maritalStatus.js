"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("maritalStatus", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      marital_status_name: {
        allowNull: false,
        type: Sequelize.CHAR(15)
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("maritalStatus");
  }
};