'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('testData', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      env: {
        type: Sequelize.STRING
      },
      medicaid: {
        type: Sequelize.STRING
      },
      programType: {
        type: Sequelize.STRING
      },
      transactionType: {
        type: Sequelize.STRING
      },
      comment: {
        type: Sequelize.STRING
      },
      submitterId: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('testData');
  }
};