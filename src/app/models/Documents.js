module.exports = (sequelize, DataTypes) => {
  const Documents = sequelize.define("Documents", {
    file_name: DataTypes.STRING
  });

  Documents.associate = models => {
    Documents.belongsTo(models.Contract, { foreignKey: 'contract_code' }),
    Documents.hasOne(models.DocumentTypes, { foreignKey: 'document_type_code' })
  };

  return Documents;
};
