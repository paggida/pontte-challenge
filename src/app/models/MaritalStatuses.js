module.exports = (sequelize, DataTypes) => {
  const MaritalStatuses = sequelize.define("MaritalStatuses", {
    marital_status_name: DataTypes.STRING,
  });

  return MaritalStatuses;
};
