module.exports = (sequelize, DataTypes) => {
  const MaritalStatus = sequelize.define("MaritalStatus", {
    marital_status_name: DataTypes.STRING,
  });

  return MaritalStatus;
};
