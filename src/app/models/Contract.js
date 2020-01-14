module.exports = (sequelize, DataTypes) => {
  const Contract = sequelize.define("Contract", {
    client_name: DataTypes.STRING,
    client_email: DataTypes.STRING,
    client_cpf: DataTypes.INTEGER,
    contract_value: DataTypes.FLOAT,
    client_monthly_income: DataTypes.FLOAT,
    client_birthday: DataTypes.DATEONLY,
    client_marital_status_code: DataTypes.STRING,
    client_address: DataTypes.STRING,
    contract_step_code: DataTypes.INTEGER
  });

  Contract.associate = models => {
    Contract.hasOne(models.MaritalStatus, { foreignKey: 'client_marital_status_code' })
    Contract.hasOne(models.ContractSteps, { foreignKey: 'contract_step_code' })
  };

  return Contract;
};
