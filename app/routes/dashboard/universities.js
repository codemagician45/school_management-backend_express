const controller = require("../../../app/controllers/universities.controller");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.post("/api/university", controller.getUniversity);
    app.get("/api/universities", controller.getAllUniversities);
    app.put("/api/university/update", controller.updateUniversity);
};