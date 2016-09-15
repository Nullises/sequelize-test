'use strict';
module.exports = function(sequelize, DataTypes) {
  var Employee = sequelize.define('Employee', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING,
    mobile: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Employee;
};