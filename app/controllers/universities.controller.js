const db = require('../models');
const University = db.university;

exports.getUniversity = (req, res) => {
    const id = req.body.id;
    University.findAll({ where: { id: id }, attributes: ['id', 'name', 'phone', 'email', 'website', 'map_link', 'compus', 'country', 'city', 'address', 'users', 'emails'] }).then(
        results => res.send(results)
    )
};

exports.getAllUniversities = (req, res) => {
    University.findAll({
        attributes: ['id', 'name']
    }).then(
        results => res.send(results)
    )
};