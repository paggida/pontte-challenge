"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("contracts", {
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
        type: Sequelize.STRING
      },
      client_cpf: {
        allowNull: false,
        type: Sequelize.CHAR(11)
      },
      value: {
        allowNull: false,
        type: Sequelize.FLOAT(14, 2) ,
      },
      client_monthly_income: {
        allowNull: true,
        type: Sequelize.FLOAT(14, 2) ,
        defaultValue: 0.0
      },
      client_birthday: {
        allowNull: true,
        type: Sequelize.DATEONLY,
        defaultValue: null
      },
      client_marital_status: {
        allowNull: true,
        type: Sequelize.STRING,
        defaultValue: null
      },
      client_address: {
        allowNull: true,
        type: Sequelize.STRING,
        defaultValue: null
      },
      status: {
        allowNull: false,
        type: Sequelize.INTEGER
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("contracts");
  }
};
