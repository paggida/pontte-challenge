module.exports = (sequelize, DataTypes) => {
  const Documents = sequelize.define("Documents", {
    file_name: DataTypes.STRING(40),
    document_type_code: DataTypes.INTEGER,
    contract_code: DataTypes.INTEGER
  });

  return Documents;
};
