"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("documentTypes", {
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
      type_name: {
        allowNull: false,
        type: Sequelize.CHAR(20)
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("documentTypes");
  }
};
