'use strict';
module.exports = (sequelize, DataTypes) => {
  const testData = sequelize.define('testData', {
    env: DataTypes.STRING,
    medicaid: DataTypes.STRING,
    programType: DataTypes.STRING,
    transactionType: DataTypes.STRING,
    comment: DataTypes.STRING,
    submitterId: DataTypes.INTEGER
  }, {});
  testData.associate = function(models) {
    // associations can be defined here
  };
  return testData;
};