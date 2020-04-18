const db = require('../models');
const Fair = db.fair;
const Curriculum = db.curriculum;

// exports.getFair = (req, res) => {
//     const id = req.body.id;
//     Fair.findAll({ where: { id: id }, attributes: ['id', 'name', 'phone', 'email', 'website', 'map_link', 'compus', 'country', 'city', 'address', 'users', 'emails'] }).then(
//         results => res.send(results)
//     )
// };

exports.getAllFairs = (req, res) => {
    Fair.findAll({
        attributes: ['id', 'start_date', 'end_date', 'students_grade12_number', 'students_grade11_number', 'universities_max', 'school_id', 'to_univ_message', 'to_sup_message']
    }).then(
        results => res.send(results)
    )
};

exports.getCurriculums = (req, res) => {
    Curriculum.findAll({ attributes: ['id', 'code', 'label'] }).then(results => res.send(results))
}

exports.createNewFair = (req, res) => {
    const data = JSON.parse(JSON.stringify(req.body))
    console.log(data)
    Fair.create({
        start_date: data.start_date,
        end_date: data.end_date,
        students_grade11_number: data.students_grade11_number,
        students_grade12_number: data.students_grade12_number,
        universities_max: data.universities_max,
        to_univ_message: data.to_univ_message,
        to_sup_message: data.to_sup_message
    }).then(
        // Fair.findAll({})
        //     .then(
        results => res.send(results)
        // )
    )
}

exports.editFair = (req, res) => {

    const data = JSON.parse(JSON.stringify(req.body))
    console.log(data);
    Fair.update({
        start_date: data.start_date,
        end_date: data.end_date,
        students_grade11_number: data.students_grade11_number,
        students_grade12_number: data.students_grade12_number,
        universities_max: data.universities_max,
        to_univ_message: data.to_univ_message,
        to_sup_message: data.to_sup_message
    }, {
        where: { id: data.id }
    }).then(
        results => res.send(results)
    )

}