const config = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: false,

    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.finances = require("../models/finances.model.js")(sequelize, Sequelize);
db.award = require("../models/award.model.js")(sequelize, Sequelize);
db.note = require("../models/note.model.js")(sequelize, Sequelize);
db.event = require("../models/event.model.js")(sequelize, Sequelize);

db.school = require("../models/school.model.js")(sequelize, Sequelize);
db.university = require("../models/university.model.js")(sequelize, Sequelize);
db.fair = require("../models/fair.model.js")(sequelize, Sequelize);
db.curriculum = require("../models/curriculum.model.js")(sequelize, Sequelize);
db.counselor = require("../models/counselor.model.js")(sequelize, Sequelize);
module.exports = db;
