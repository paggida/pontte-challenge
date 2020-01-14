'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      const now = new Date;
      return queryInterface.bulkInsert('documentTypes', [
      { type_name: 'CNH', created_at: now, updated_at: now},
      { type_name: 'CPF', created_at: now, updated_at: now},
      { type_name: 'Comprovante de renda' , created_at: now, updated_at: now},
      { type_name: 'Foto do imóvel' , created_at: now, updated_at: now},
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('documentTypes', null, {});
  }
};
