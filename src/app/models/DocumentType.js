module.exports = (sequelize, DataTypes) => {
  const DocumentTypes = sequelize.define("DocumentTypes", {
    type_name: DataTypes.STRING
  });

  return DocumentTypes;
};
