const controller = require("../../../app/controllers/counselors.controller");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.get("/api/counselors/:id", controller.getCounselors);
    app.post("/api/counselors/create", controller.createCounselor);
    app.put("/api/counselors/update", controller.updateCounselor);
};
