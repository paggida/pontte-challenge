"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("contract", {
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
      client_name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      client_email: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING
      },
      client_cpf: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      value: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      client_monthly_income: {
        allowNull: true,
        type: Sequelize.FLOAT
      },
      client_birthday: {
        allowNull: true,
        type: Sequelize.DATEONLY
      },
      client_marital_status: {
        allowNull: true,
        type: Sequelize.STRING
      },
      client_address: {
        allowNull: true,
        type: Sequelize.STRING
      },
      status: {
        allowNull: false,
        type: Sequelize.INTEGER
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("contract");
  }
};
