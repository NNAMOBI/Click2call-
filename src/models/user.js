'use strict';


module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    isAdmin: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    status: DataTypes.STRING
  }, {});
  user.associate = function(models) {
    // associations can be defined here
    // users belongsTo Organization
    user.belongsTo(models.organization, { foreignKey: "orgId" });
  };
  return user;
};