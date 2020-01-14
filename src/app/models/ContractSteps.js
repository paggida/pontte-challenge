module.exports = (sequelize, DataTypes) => {
  const ContractSteps = sequelize.define("ContractSteps", {
    contract_step_definition: DataTypes.STRING,
  });

  ContractSteps.associate = models => {
    ContractSteps.belongsToMany(models.Contract, { foreignKey: 'contract_step_code' })
  };

  return ContractSteps;
};
