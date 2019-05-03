'use strict';
const bcrypt = require('bcrypt')
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING, 
      validate: {
        isEmail: true
      }
    },
    password: DataTypes.STRING,
    passwordResetDate: DataTypes.DATE
  }, {});
  user.beforeCreate((eachUser, info) => {
    if(eachUser.password){
      return bcrypt.hash(eachUser.password, 10)
      .then(hashPassword => {
        eachUser.password = hashPassword
      })
      .catch(error => {
        console.log(error)
      })
    }
  })
  user.associate = function(models) {
    // associations can be defined here
  };
  return user;
};