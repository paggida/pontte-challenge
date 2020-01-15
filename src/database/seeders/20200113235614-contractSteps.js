'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      const now = new Date;
      return queryInterface.bulkInsert('contract_steps', [
      { contract_step_definition: 'Criação', created_at: now, updated_at: now},
      { contract_step_definition: 'Upload de imagens', created_at: now, updated_at: now},
      { contract_step_definition: 'Aprovação' , created_at: now, updated_at: now},
      { contract_step_definition: 'Reprovação' , created_at: now, updated_at: now}
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('contract_steps', null, {});
  }
};
