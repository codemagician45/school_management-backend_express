module.exports = (sequelize, Sequelize) => {
  const Award = sequelize.define("awards", {
    role: {
      type: Sequelize.STRING
    },
    name: {
      type: Sequelize.STRING
    },
    gift: {
      type: Sequelize.STRING
    },
    cash: {
      type: Sequelize.STRING
    }
  });

  return Award;
};
