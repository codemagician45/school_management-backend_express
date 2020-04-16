const db = require("../models");
const User = db.user;

exports.allUsers = (req, res) => {
  User.findAll({ attributes: [`id`, `uuid`, `school_id`, `university_id`, `name`, `role`, `email`, `password`, `logo`, `phone`, `ext`, `mobile`, `title`, `state`] }).then(response => res.send(response))
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

exports.addUser = (req, res) => {
  const data = JSON.parse(JSON.stringify(req.body));

  User.create({
    name: data.name,
    mobile: data.mobile,
    email: data.email,
    phone: data.phone,
    ext: data.ext,
    title: data.title
  }).then(results => res.send(results));
}

exports.updateUser = (req, res) => {
  const data = JSON.parse(JSON.stringify(req.body));
  console.log(data)
  if (data.university_id)
    User.update({
      university_id: data.university_id,
      name: data.name,
      mobile: data.mobile,
      email: data.email,
      phone: data.phone,
      ext: data.ext,
      title: data.title
    }, {
      where: { id: data.id }
    }).then(
      results => {
        User.findAll({ attributes: [`id`, `school_id`, `university_id`, `name`, `role`, `email`, `password`, `logo`, `phone`, `ext`, `mobile`, `title`, `state`] }).then(response => res.send(response))
        // res.send(results)
      });
  else
    User.update({
      name: data.name,
      mobile: data.mobile,
      email: data.email,
      phone: data.phone,
      ext: data.ext,
      title: data.title
    }, {
      where: { id: data.id }
    }).then(
      results => {
        User.findAll({ attributes: [`id`, `school_id`, `university_id`, `name`, `role`, `email`, `password`, `logo`, `phone`, `ext`, `mobile`, `title`, `state`] }).then(response => res.send(response))
        // res.send(results)
      });
}

exports.getMyUser = (req, res) => {
  const id = req.params.id
  User.findAll({ where: { id: id } }).then(results => res.send(results));
}