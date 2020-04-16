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
        // attributes: ['id', 'name']
    }).then(
        results => res.send(results)
    )
};

exports.updateUniversity = (req, res) => {
    console.log("userUpdate", req.body)
    const data = JSON.parse(JSON.stringify(req.body));
    console.log("parsed", data)
    University.update({
        name: data.name,
        email: data.email,
        phone: data.phone,
        website: data.website,
        map_link: data.map_link
    }, {
        where: { id: data.id }
    }).then(
        University.findAll({ where: { id: data.id } }).then(
            results => res.send(results)
        )
    )

};