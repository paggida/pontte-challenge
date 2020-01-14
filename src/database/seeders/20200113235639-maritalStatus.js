'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const now = new Date;
    return queryInterface.bulkInsert('marital_statuses', [
      { marital_status_name: 'Solteiro(a)', created_at: now, updated_at: now},
      { marital_status_name: 'Casado(a)', created_at: now, updated_at: now},
      { marital_status_name: 'Viúvo(a)', created_at: now, updated_at: now},
      { marital_status_name: 'Separado(a)', created_at: now, updated_at: now},
      { marital_status_name: 'Divorciado(a)', created_at: now, updated_at: now},
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('marital_statuses', null, {});
  }
};
