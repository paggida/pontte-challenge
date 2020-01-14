"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("contract_steps", {
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
      contract_step_definition: {
        allowNull: false,
        type: Sequelize.STRING(20)
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("contract_steps");
  }
};
