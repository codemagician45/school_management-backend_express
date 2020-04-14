const db = require('../models');
const Fair = db.fair;

// exports.getFair = (req, res) => {
//     const id = req.body.id;
//     Fair.findAll({ where: { id: id }, attributes: ['id', 'name', 'phone', 'email', 'website', 'map_link', 'compus', 'country', 'city', 'address', 'users', 'emails'] }).then(
//         results => res.send(results)
//     )
// };

exports.getAllFairs = (req, res) => {
    Fair.findAll({
        attributes: ['start_date', 'end_date', 'students_grade12_number', 'students_grade11_number', 'universities_max']
    }).then(
        results => res.send(results)
    )
};