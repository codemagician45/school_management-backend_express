const db = require('../models');

const Counselor = db.counselor;

exports.getCounselors = (req, res) => {
    const schId = req.params.id;
    console.log(schId)
    Counselor.findAll({ where: { school_id: schId } }).then(
        results => res.send(results)
    )
}

exports.createCounselor = (req, res) => {

    const data = JSON.parse(JSON.stringify(req.body))
    Counselor.create({

        full_name: data.full_name,
        mobile: data.mobile,
        email: data.email,
        school_id: data.school_id

    }).then(
        result => res.send(result)
    )
}

exports.updateCounselor = (req, res) => {

    const data = JSON.parse(JSON.stringify(req.body));
    Counselor.update({
        full_name: data.full_name,
        mobile: data.mobile,
        email: data.email,
        school_id: data.school_id
    }, { where: { id: data.id } }).then(
        result => res.send(result)
    )

}