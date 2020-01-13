module.exports = (sequelize, DataTypes) => {
  const Documents = sequelize.define("Documents", {
    file_name: DataTypes.STRING,
    document_type: DataTypes.STRING,
  });

  Documents.associate = models => {
    Documents.belongsTo(models.Contract, { foreignKey: 'contract_code' })
  };

  return Documents;
};
