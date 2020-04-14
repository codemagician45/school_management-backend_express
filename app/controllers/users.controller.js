const db = require("../models");
const User = db.user;

exports.allUsers = (req, res) => {
  User.findAll().then(response => res.send(response))
};

exports.allAdministrators = (req, res) => {
  User.findAndCountAll({ where: { role: 'admin' } }).then(users => res.json(JSON.stringify(users.count)))
};

exports.allStudents = (req, res) => {
  User.findAndCountAll({ where: { role: 'student' } }).then(users => res.json(JSON.stringify(users.count)))
};

exports.allParents = (req, res) => {
  User.findAndCountAll({ where: { role: 'parent' } }).then(users => res.json(JSON.stringify(users.count)))
};

exports.allTeachers = (req, res) => {
  User.findAndCountAll({ where: { role: 'teacher' } }).then(users => res.json(JSON.stringify(users.count)))
};

exports.allLibrarians = (req, res) => {
  User.findAndCountAll({ where: { role: 'librarian' } }).then(users => res.json(JSON.stringify(users.count)))
};

exports.allAccountants = (req, res) => {
  User.findAndCountAll({ where: { role: 'accountant' } }).then(users => res.json(JSON.stringify(users.count)))
};

exports.allEmployees = (req, res) => {
  User.findAndCountAll({ where: { role: 'employee' } }).then(users => res.json(JSON.stringify(users.count)))
};
