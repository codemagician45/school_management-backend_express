var bodyParser = require("body-parser");
var express = require('express');
var cors = require("cors");

var app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");
const User = db.user;

// db.sequelize.sync({ force: true });
// db.sequelize.sync({ force: true }).then(() => {
//     createAdmin();
// });

// const createAdmin = () => {
//     User.create({
//         role: 'admin',
//         email: 'admin',
//         password: 'admin1',
//     });
// };

require('./app/routes/auth')(app);
require('./app/routes/dashboard/finances')(app);
require('./app/routes/dashboard/students')(app);
require('./app/routes/dashboard/parents')(app);
require('./app/routes/dashboard/teachers')(app);
require('./app/routes/dashboard/librarians')(app);
require('./app/routes/dashboard/accountants')(app);
require('./app/routes/dashboard/employees')(app);
require('./app/routes/dashboard/awards')(app);
require('./app/routes/dashboard/notes')(app);
require('./app/routes/dashboard/events')(app);
require('./app/routes/dashboard/schools')(app);
require('./app/routes/dashboard/universities')(app);
require('./app/routes/dashboard/fairs')(app);
require('./app/routes/dashboard/users')(app);
require('./app/routes/dashboard/counselors')(app);

module.exports = app;
