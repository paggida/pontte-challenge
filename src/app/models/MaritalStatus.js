module.exports = (sequelize, DataTypes) => {
  const MaritalStatus = sequelize.define("MaritalStatus", {
    marital_status_name: DataTypes.STRING,
  });

  MaritalStatus.associate = models => {
    MaritalStatus.belongsToMany(models.Contract, { foreignKey: 'client_marital_status_code' })
  };

  return MaritalStatus;
};
