const db = require("../models");
const { Op } = require('sequelize');
const Finances = db.finances;

exports.graphData = (req, res) => {
  Finances.findAll().then(response => res.send(response))
  // Finances.findAll({ attributes: ['income', 'expense']},
  // { where: {
  //   date: { [Op.between]: ["2020-01-01T00:00:00.000Z", "2020-01-02T00:00:00.000Z"] },
  // } }).then(response => res.json(response))
};
