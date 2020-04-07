module.exports = (sequelize, Sequelize) => {
  const Note = sequelize.define("notes", {
    role: {
      type: Sequelize.STRING
    },
    name: {
      type: Sequelize.STRING
    },
    text: {
      type: Sequelize.STRING
    }
  });

  return Note;
};
