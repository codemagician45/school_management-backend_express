module.exports = (sequelize, Sequelize) => {
  const Finances = sequelize.define("finances", {
    date: {
      type: Sequelize.DATE
    },
    type: {
      type: Sequelize.STRING
    },
    incomeAmount: {
      type: Sequelize.FLOAT,
      allowNull: false
    },
    expenseAmount: {
      type: Sequelize.FLOAT,
      allowNull: false
    },
    payer: {
      type: Sequelize.STRING
    },
    payee: {
      type: Sequelize.STRING
    }
  });

  return Finances;
};
