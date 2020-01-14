module.exports = (sequelize, DataTypes) => {
  const ContractSteps = sequelize.define("ContractSteps", {
    contract_step_definition: DataTypes.STRING,
  });

  return ContractSteps;
};
