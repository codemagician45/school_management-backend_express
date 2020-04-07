module.exports = (sequelize, Sequelize) => {
  const Event = sequelize.define("events", {
    start: {
      type: Sequelize.DATE
    },
    end: {
      type: Sequelize.DATE
    },
    title: {
      type: Sequelize.STRING
    },
    tooltip: {
      type: Sequelize.STRING
    },
    location: {
      type: Sequelize.STRING
    }
  });

  return Event;
};
