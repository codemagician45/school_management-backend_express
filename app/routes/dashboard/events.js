const controller = require("../../../app/controllers/tables.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/events/get", controller.getEvents);
  app.post("/api/events/insert", controller.insertEvent);
  app.put("/api/events/update", controller.updateEvent);
  app.delete("/api/events/delete", controller.deleteEvent);
};
