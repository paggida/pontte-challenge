module.exports = (sequelize, DataTypes) => {
  const Documents = sequelize.define("Documents", {
    file_name: DataTypes.CHAR(40)
  });

  Documents.associate = models => {
    Documents.belongsTo(models.Contract, { foreignKey: 'contract_code' }),
    Documents.hasOne(models.DocumentTypes, { foreignKey: 'document_type_code' })
  };

  return Documents;
};
