'use strict';
module.exports = (sequelize, DataTypes) => {
  const organization = sequelize.define('organization', {
    businessName: DataTypes.STRING,
    businessAddress: DataTypes.STRING,
    contactPhone: DataTypes.STRING
  }, {});
  organization.associate = function(models) {
    // associations can be defined here
    // organization hasMany users
    organization.hasMany(models.user, { foreignKey: "orgId" });
  };
  return organization;
};