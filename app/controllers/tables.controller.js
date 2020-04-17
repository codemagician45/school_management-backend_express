const db = require("../models");
const Award = db.award;
const Note = db.note;
const Event = db.event;
const School = db.school;

exports.getAwards = (req, res) => {
  const role = req.id;
  const parsedRole = JSON.parse(role.toString());
  console.log(role);
  console.log(parsedRole);
  Award.findAll({ where: { role: parsedRole } }).then(results => res.send(results))
};

exports.getNotes = (req, res) => {
  const role = req.id;
  const parsedRole = JSON.parse(role.toString());
  Note.findAll({ where: { role: parsedRole } }).then(results => res.send(results))
};

exports.getEvents = (req, res) => {
  Event.findAll({
    attributes: ['id', 'start', 'end', 'title', 'tooltip', 'location']
  }).then(
    results => {
      console.log("eventget", results)
      res.send(results)
    }
  );
};

exports.insertEvent = (req, res) => {
  const data = req.body.values;
  const parsedData = JSON.parse(data.toString());
  Event.create({
    start: parsedData.start,
    end: parsedData.end,
    title: parsedData.title,
    tooltip: parsedData.tooltip,
    location: parsedData.location
  }).then(results => res.send(results));
};

exports.updateEvent = (req, res) => {
  const data = req.body.values;
  const parsedData = JSON.parse(data.toString());
  Event.update({
    start: parsedData.start,
    end: parsedData.end,
    title: parsedData.title,
    tooltip: parsedData.tooltip,
    location: parsedData.location
  }, {
    where: { id: req.body.key }
  }).then(status => res.sendStatus(200));
};

exports.deleteEvent = (req, res) => {
  Event.destroy({
    where: { id: req.body.key }
  }).then(status => res.sendStatus(200));
};

exports.getSchools = (req, res) => {
  School.findAll(
    {
      attributes: [`id`, `name`, `email`, `phone`, `address1`, `address2`, `country`, `city`, `website`, `users`, `emails`, `number_grade11`, `number_grade12`, `curriculum_id`, `fees_grade11`, `fees_grade12`]
    }
  ).then(
    results => {
      // console.log("schoolget", results)
      res.send(results)
    }
  );
}