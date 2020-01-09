module.exports = (sequelize, DataTypes) => {
  const Contract = sequelize.define("contract", {
    client_name: DataTypes.STRING,
    client_email: DataTypes.STRING,
    client_cpf: DataTypes.INTEGER,
    value: DataTypes.FLOAT,
    client_monthly_income: DataTypes.FLOAT,
    client_birthday: DataTypes.DATEONLY,
    client_marital_status: DataTypes.STRING,
    client_address: DataTypes.STRING,
    status: DataTypes.INTEGER
  });
  return Contract;
};
